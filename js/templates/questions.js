var yr = yr || require('yate/lib/runtime.js');

(function() {

    var cmpNN = yr.cmpNN;
    var cmpSN = yr.cmpSN;
    var nodeset2xml = yr.nodeset2xml;
    var nodeset2boolean = yr.nodeset2boolean;
    var nodeset2attrvalue = yr.nodeset2attrvalue;
    var nodeset2scalar = yr.nodeset2scalar;
    var scalar2attrvalue = yr.scalar2attrvalue;
    var xml2attrvalue = yr.xml2attrvalue;
    var scalar2xml = yr.scalar2xml;
    var xml2scalar = yr.xml2scalar;
    var simpleScalar = yr.simpleScalar;
    var simpleBoolean = yr.simpleBoolean;
    var selectNametest = yr.selectNametest;
    var closeAttrs = yr.closeAttrs;

    var M = new yr.Module();

    var j0 = [ ];

    var j1 = [ 0, 'questions' ];

    var j2 = [ 0, 'id' ];

    var j3 = [ 0, 'text' ];

    var j4 = [ 0, 'extra_input' ];

    var j5 = [ 0, 'questions', 0, 'question' ];

    // match /
    M.t0 = function t0(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<table class=\"" + "table" + "\">";
        var items0 = selectNametest('questions', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            r0 += "<tr class=\"" + "question" + "\">";
            r0 += "<td class=\"" + "left-column" + "\"><div class=\"" + "question-id" + "\"><label for=\"" + "q" + nodeset2attrvalue( ( selectNametest('id', c1, []) ) ) + "_1" + "\"><em>" + "Вопрос " + nodeset2xml( ( selectNametest('id', c1, []) ) ) + "</em></label></div></td>";
            r0 += "<td>";
            r0 += "<div class=\"" + "question-text" + "\"><b>" + nodeset2xml( ( selectNametest('text', c1, []) ) ) + "</b></div>";
            r0 += "<div class=\"" + "question-input" + "\">";
            r0 += "<p>" + nodeset2xml( ( selectNametest('extra_input', c1, []) ) ) + "</p>";
            r0 += "<span class=\"" + "input-outline" + "\">";
            r0 += "<textarea class=\"" + "question-text-input" + "\" rows=\"" + "4" + "\" cols=\"" + "80" + "\" name=\"" + "q" + nodeset2attrvalue( ( selectNametest('id', c1, []) ) ) + "_1" + "\" id=\"" + "q" + nodeset2attrvalue( ( selectNametest('id', c1, []) ) ) + "_1" + "\"></textarea>";
            r0 += "</span>";
            r0 += "</div>";
            r0 += "</td>";
            r0 += "</tr>";
            r0 += "<tr>";
            r0 += "<td colspan=\"" + "2" + "\"><hr class=\"" + "questions-separator" + "\"/></td>";
            r0 += "</tr>";
            r0 += m.a(m, m.s(j5, c1), '', a0)
        }
        r0 += "</table>";

        return r0;
    };
    M.t0.j = 1;
    M.t0.a = 1;

    M.matcher = {
        "": {
            "": [
                "t0"
            ]
        }
    };
    M.imports = [];

    yr.register('questions', M);

})();
