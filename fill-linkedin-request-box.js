function get_profile_first_name(){
    var member_name_class_name = "pv-top-card-section__name inline t-24 t-black t-normal";
    var name_list = document.getElementsByClassName(member_name_class_name);
    
    var profile_name = name_list[0].innerText.trim();
    
    // return only FIRST name
    var first_name = profile_name.split(" ")[0].trim();
    console.log("First Name: " + first_name);
    return first_name;
}

function fill_in_message(first_name){
var message_template = "Hello <>! I'd like to add you to my growing professional network on LinkedIn as a valued connection. Please kindly accept my connection request.";
var message_txt = message_template.replace("<>", first_name);

var text_box_element_name = "message";
var txt_box_list = document.getElementsByName(text_box_element_name);
console.log("Typing in text_box...");
//txt_box_list[0].innerHTML=message_txt;
txt_box_list[0].value = message_txt;
console.log("text_box filled...");
}


// fill just message in text box
fill_in_message(get_profile_first_name());
