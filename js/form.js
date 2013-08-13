window.form = {
  
  el: '#form-form',
  
  init: function() {
    this.form = $(this.el);
    this.questions_container = $('#questions-container');
    this.question_template = Handlebars.compile($("#question-template").html());
    
    $('.form-group-title').on('click', function() {
      $(this).siblings('.form-group-content').slideToggle(200);
    });
  },
  
  render: function() {
    self = this;
    $.each(this.questions_proto, function(i, q) {
      self.questions_container.append(self.question_template(q));
    });
  },
  
  check: function() {
    
  }
  
};

window.onload = function() {
  form.init();
  form.render();
};