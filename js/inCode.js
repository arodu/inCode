function inCode($editor, $consola, $btns, $options){
    var debug = true;

    $run = $btns.find('.ejecutar');

    $run.on('click',function(){
        //alert($textarea.val());
        init();
        eval($editor.val());
    })

    function init(){
        var fecha = new Date();
        reset();
        writeln(fecha.getTime());
    };

    function reset(){
        $consola.html("");
    };

    function write(msg, type){
        $consola.append(msg);
    };

    function writeln(msg, type){
        write(msg + "<br/>");
    };

    function read(msg, value){
        return prompt(msg, value);
    };

    function w_debug(msg){
        if(debug){
            console.log(msg);
        }
    }

    w_debug("Iniciado objeto de tipo inCode");

}
