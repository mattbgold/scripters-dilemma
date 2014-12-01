var Dilemma;
(function(Dilemma) {
	Dilemma.strategies=[{
        name: 'Always Defect',
        score: 0,
        alg: function(theirHistory, myHistory) {
            return 1;
        }
    }, {
        name: 'Always Cooperate', 
        score: 0,
        alg: function(theirHistory, myHistory) {
            return 0;
        }
    }, { 
        name: 'Tit for Tat', 
        score: 0,
        alg: function(h) {
            return h.length ? h[h.length-1] : 0;
        }
    }, {
        name: 'Tat for Tit', 
        score: 0,
        alg: function(h) {
            return h.length ? 1-(h[h.length-1]) : 0;
        }
    }, { 
        name: 'Random', 
        score: 0,
        alg: function() {
            return Math.random() >= 0.5 ? 1 : 0;
        }
    }, {
        name: 'Tit for Tat with random forgiveness',
        score: 0,
        alg: function(h) {
            //let's forgive randomly sometimes, to prevent getting caught in a defect feedback loop
            if(Math.random() >= 0.2)
                return h.length ? h[h.length-1] : 0;
            else
                return 0;
        }
    }];
})(Dilemma || (Dilemma = {}));