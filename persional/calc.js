function add(){
    var left = document.form1.left.value;
    var right = document.form1.right.value;
    var res = Number(left) + Number(right);
    #alert(typeof(res))
    document.form1.result.value = String(res);
}