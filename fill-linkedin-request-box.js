function fill_in_message(first_name){
var message_template = "Hello <>! I'd like to add you to my growing professional network on LinkedIn as a valued connection. Please kindly accept my connection request.";
var message_txt = message_template

var text_box_element_name = "message";
var txt_box_list = document.getElementsByName(text_box_element_name);
console.log("Typing in text_box...");
//txt_box_list[0].innerHTML=message_txt;
txt_box_list[0].value = message_txt;
console.log("text_box filled...");
}


// fill just message in text box
fill_in_message();
