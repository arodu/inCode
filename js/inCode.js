function inCode(editor, $consola, $btns, $options){
    var debug = true;

    $run = $btns.find('.ejecutar');

    $run.on('click',function(){
        try {
            init();
            eval(editor.getValue());
            end();
        }catch(err) {
            msg = err.message + "&nbsp;&nbsp;&nbsp;(Linea " + err.lineNumber + ")";
            _debug(err);
            writeln(msg, 'error');
        }
    });

    function init(){
        reset();
        //var fecha = new Date();
        //writeln(fecha,'date');
        _debug("Inicio de ejecucion de codigo");
    };

    function end(){
        ln();
        var fecha = new Date();
        writeln('---  '+fecha+'  ---','date');
        _debug("Fin de ejecucion de codigo");
    }

    function reset(){
        $consola.html("");
    };

    function write(msg, type, wDebug){
        switch(type) {
            case "error":
                msg = '<span class="error"><strong>Error: </strong>'+msg+'</span>';
                break;
            case 'date':
                msg = '<span class="date">'+msg+'</span>';
                break;
            case 'input_text':
                msg = '<span class="input-text">'+msg+'</span>';
                break;
            case 'input_value':
                msg = '<span class="input-value">'+msg+'</span>';
                break;
        }
        $consola.append(msg);
        _debug("Escritura en consola: "+msg);
    };

    function writeln(msg, type){
        write( msg, type );
        ln();
    };

    function ln(){
        $consola.append("<br/>");
    };

    function read(msg, default_value){
    	out = window.prompt(msg, default_value);
        write(msg,"input_text");
        writeln(out,"input_value");

    	if (isFinite(out)) {
    		n = Number(out);
    		if(isInt(n)){
    			n = parseInt(n);
    		}else if(isFloat(n)){
    			n = parseFloat(n);
    		}
    		out = n;
    	}
        _debug("Lectura de datos: "+out);
        return out;
    };

    function isInt(n){
            return Number(n)===n && n%1===0;
    };

    function isFloat(n){
            return   n===Number(n) && n%1!==0
    };

    function setDebug(value){
        debug = value;
    };

    function _debug(msg){
        if(debug){
            console.log(msg);
        }
    }

    _debug("Iniciado objeto de tipo inCode");

}
