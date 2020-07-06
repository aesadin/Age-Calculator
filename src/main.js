import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $(".formOne").submit(function(event) {
    event.preventDefault();
   
  });
});
