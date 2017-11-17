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

            //TODO make this work for an arbitrary amount of fields and field names
            //also clean it up to prevent redundency
            var name = this.$form.find('.name').val();
            var category = this.$form.find('.category').val();
            var website = this.$form.find('.website').val();
            var company = this.$form.find('.company').val();
            var phone = this.$form.find('.phone').val();
            var email = this.$form.find('.email').val();
            var apiToken = this.$form.find('.apiToken').val();

            var postObject = {'name': name, 'category': category, 'website': website, "company": company, "phone": phone, "email": email, "apiToken": apiToken}


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
            });
        }
    }

    leadTrackerForm.init();
})(jQuery);
