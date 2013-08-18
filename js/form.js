window.form = {
  
  el: '#form-form', // ИД элемента формы
  file_limit: 256000, // Максимальный размер файла резюме
  email_regexp: /^[\S]+\@[\S]+\.[a-z]{2,6}$/, // RegExp для проверки email
  
  init: function() {
    this.form = $(this.el);
    this.questions_container = $('#questions-container');
    this.question_template = Handlebars.compile($("#question-template").html());
    this.error_template = Handlebars.compile($("#error-template").html());
    
    // Сворачиваем и разворачиваем разделы анкеты
    $('.form-group-title h3').on('click', function() {
      var self = this;
      $(this).closest('.form-group-title').siblings('.form-group-content').slideToggle(200, function() {
        $(self).children('.chevron-icon').toggleClass('down');
      });
    });
    
    // Следим за прогрессом в вопросах
    var self = this;
    $(document).on('change', '.question-text-input', function(ev) {
      var answers = 0;
      $('.question-text-input').each(function(i) {
        if ($(this).val() != "") {
          answers += 1
        };
      });
      var progress = Math.floor(answers / self.questions_proto.length * 100);
      var bar = $('#questionary-progress');
      bar.find('.count').text(progress + "%");
      bar.find('.bar').animate({width: progress + "%"}, 400);
    });
    
    // Добавляем желтое свечение формам с фокусом
    $(document).on('focus', '.question-text-input, .about-input.text-input', function(ev) {
      $(this).closest('.input-outline').addClass('focused');
    });
    $(document).on('focusout', '.question-text-input, .about-input.text-input', function(ev) {
      $(this).closest('.input-outline').removeClass('focused');
    });
  },
  
  // Рендерит вопросы из списка по шаблону
  render: function() {
    var self = this;
    $.each(this.questions_proto, function(i, q) {
      self.questions_container.append(self.question_template(q));
    });
  },
  
  // Проверяет правильность заполненности формы
  check: function() {
    var valid = true;
    
    // Удаляем старые сообщения об ошибках
    $('.input-error').remove();
    
    // Удаляем сообщение об ошибке, если пользователь начал взаимодейстовать с полем
    $('select, input').on('focus', function(ev) {
      $(this).siblings('.input-error').remove();
    });
    $('select, input').on('change', function(ev) {
      $(this).siblings('.input-error').remove();
    });
    
    // Поле с резюме
    file_input = $('#FileResume');
    if (file_input[0].files.length == 0) {
      valid = true;
    } else {
      if (file_input[0].files.length == 1 && file_input[0].files[0].size <= this.file_limit) {
        valid = true;
      } else {
        valid = false;
        file_input.parent().append(this.error_template({text: "Приложенный вами файл больше 250 КБ."}));
      }
    };
    
    // Соглашение на передачу данных
    agree_input = $('#agree-checkbox');
    if (agree_input[0].checked) {
      valid = true;
    } else {
      valid = false;
      agree_input.parent().append(this.error_template({text: "Подтвердите, пожалуйста, своё согласие на передачу анкеты с вашими персональными данными."}));
    };
    
    // Откуда узнали
    recommend_input = $('#RecommendBy');
    if (recommend_input.val() != 'no') {
      valid = true;
    } else {
      valid = false;
      recommend_input.parent().append(this.error_template({text: "Укажите, пожалуйста, откуда вы узнали о нашем предложении."}));
    };
    
    // Email
    email_input = $('#Email');
    if (email_input.val() == "") {
      valid = false;
      email_input.parent().parent().append(this.error_template({text: 'Не заполнено поле "E-mail".'}));
    } else {
      if (this.email_regexp.exec(email_input.val())) {
        valid = true;
      } else {
        valid = false;
        email_input.parent().parent().append(this.error_template({text: 'Неверный адрес электронной почты.'}));
      }
    };
    
    return valid;
  }
  
};

// Инициализируем форму и рендерим вопросы после загрузки страницы
window.onload = function() {
  form.init();
  form.render();
};