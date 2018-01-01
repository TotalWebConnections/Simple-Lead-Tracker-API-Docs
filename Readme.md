*******STILL IN PROGRESS*********


API examples for www.simpleleadtracker.com


There are two ways to make requests to the api


1. Backend form process
This allows you to create your own forms or other ways to process data before sending it to the Simple Lead Tracker Application

2. Drop In form
This requires no developer help and can be dropped into any web page.






****BACKEND FORM PROCESS*****

The backend form allows you to programatically send data to simple lead tracker. In order do so, you'll also need
to send the secret key for the user along with the request to authenticate.

Default field names are:
contact
company
phone
email
category
website


Custom fields can also be send in the camel case

For example, if a user has the field named "Customer Address" then sending the named parameter customerAddress will correctly save this value in the database
