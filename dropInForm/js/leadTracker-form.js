(function($){

    var leadTrackerForm = {
        //url: "https://www.simpleleadtracker.com/api/addLead"; //live
        url: "http://localhost/leadTracker/public/api/addLead", //testing TODO remove this on live

        init: function() {

            this.cacheDom();
            this.bindEvents();
        },
        cacheDom: function() {
            this.$form = $('#simpleLeadForm form');
        },
        bindEvents: function(){
            this.$form.submit(this.handleForm.bind(this));
        },
        handleForm: function(){
            event.preventDefault();

            //TODO front end form validation


            var postObject = {};
            $(this.$form).find('input').each(function(){
              if($(this).attr('type') != 'hidden'){
                var inputName = $(this).attr('name');
                var value = $(this).val();
                postObject[inputName] = value;
              }
            });

            postObject.apiToken = this.$form.find('.apiToken').val();


            //handle the actual AJAX request
            var request = $.ajax({
              url: this.url,
              type: "POST",
              data: postObject
            });

            request.done(function(msg) {
              alert('success')
            });

            request.fail(function(jqXHR, textStatus) {
              alert( "Request failed: " + textStatus );
              console.log(textStatus)
              console.log(jqXHR)
            });
        }
    }

    leadTrackerForm.init();
})(jQuery);
