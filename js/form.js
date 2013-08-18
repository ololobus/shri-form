window.form = {
  
  el: '#form-form',
  
  init: function() {
    this.form = $(this.el);
    this.questions_container = $('#questions-container');
    this.question_template = Handlebars.compile($("#question-template").html());
    
    $('.form-group-title h3').on('click', function() {
      var self = this;
      $(this).closest('.form-group-title').siblings('.form-group-content').slideToggle(200, function() {
        $(self).children('.chevron-icon').toggleClass('down');
      });
    });
  },
  
  render: function() {
    var self = this;
    $.each(this.questions_proto, function(i, q) {
      self.questions_container.append(self.question_template(q));
    });
  },
  
  check: function() {
    return false;
  }
  
};

window.onload = function() {
  form.init();
  form.render();
};