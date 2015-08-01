function inCode(editor, $consola, $btns, $options){
    var debug = true;

    $run = $btns.find('.ejecutar');

    $run.on('click',function(){
        //alert($textarea.val());
        init();
        try {
            eval(editor.getValue());
        }catch(err) {
            writeln(err.message, 'error');
        }
        _debug("Ejecutar codigo: ");
    });

    function init(){
        var fecha = new Date();
        reset();
        writeln(fecha,'date');
        _debug("Inicido consola");
    };

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
        write( msg+"<br/>", type );
        //write();
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
