
/* 
----------------------------------------------------------------
-------- LinkedIn Auto Custom Connection Request Sender --------
----------------------------------------------------------------
author: Ketan Singh
mail: ketansingh_vsec@yahoo.com
*/

function get_profile_first_name(){
var member_name_class_name = "pv-top-card-section__name inline t-24 t-black t-normal";
var name_list = document.getElementsByClassName(member_name_class_name);

var profile_name = name_list[0].innerText;

// return only FIRST name
var first_name = profile_name.split(" ")[0].trim();
console.log("First Name: " + profile_name);
return first_name;
}


function click_on_connect_btn(){
// click connect
var connect_btn_class_name = "pv-s-profile-actions pv-s-profile-actions--connect button-primary-large mr2 mt2";
var btn_list = document.getElementsByClassName(connect_btn_class_name);
console.log("Clicking on connect_btn: " + btn_list[0].innerText);

// click on "connect"
btn_list[0].click();
}


function click_on_add_a_note_btn(){
var note_btn_class_name = "button-secondary-large mr1";
var btn_list = document.getElementsByClassName(note_btn_class_name);
console.log("Clicking on note_btn: " + btn_list[0].innerText);

// click on "add a note"
btn_list[0].click();
}


function fill_in_message(profile_name){
var message_template = "Hello #! I'd like to add you to my growing professional network on LinkedIn as a valued connection. Please kindly accept my connection request.";
var message_txt = message_template.replace("#", profile_name);

var text_box_element_name = "message";
var txt_box_list = document.getElementsByName(text_box_element_name);
console.log("Typing in text_box...");
//txt_box_list[0].innerHTML=message_txt;
txt_box_list[0].value = message_txt;
}



function send_connection_request() {
console.log("Sending automatic LinkedIn Request:: START");
// get name
var first_name = get_profile_first_name();

// click on "connect"
click_on_connect_btn();

// click on "add a note"
click_on_add_a_note_btn();

// fill message in text box
fill_in_message(first_name);

console.log("Sending automatic LinkedIn Request:: END");
}


// fire the script
send_connection_request();