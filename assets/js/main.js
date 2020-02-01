// http://lists.evolt.org/archive/Week-of-Mon-20040202/154813.html
function gen_mail_to_link(lhs,rhs,subject) {
    return "<a href=\"mailto://" + lhs + "@" + rhs + "?subject=" + subject + "\">" + lhs + "@" + rhs + "</a>";
}

$(document).ready(function(){
    var element = gen_mail_to_link('gabriel.coppini','gmail.com','Feedback');
    $('#emailContainer').append(element);
});