var Dilemma;
(function(Dilemma) {
    var Actor = function(strategy){
        var self = this;

        //should this inherit from Strategy? it needs to be a reference
        self.score = 0;
        self.history = [];
        self.strategy = strategy;
    };

    var Strategy = function(strategy) {
        var self = this;

        self.name = strategy.name || null;
        self.algorithm = strategy.alg || null;
    };

	Dilemma.strategies=[{
        name: 'Always Defect',
        alg: function(theirHistory, myHistory) {
            return 1;
        }
    }, {
        name: 'Always Cooperate', 
        alg: function(theirHistory, myHistory) {
            return 0;
        }
    }, { 
        name: 'Tit for Tat', 
        alg: function(h) {
            return h.length ? h[0] : 0;
        }
    }, {
        name: 'Tat for Tit', 
        alg: function(h) {
            return h.length ? 1-(h[0]) : 0;
        }
    }, { 
        name: 'Random', 
        alg: function() {
            return Math.random() >= 0.5 ? 1 : 0;
        }
    }, {
        name: 'Tit for Tat with random forgiveness',
        alg: function(h) {
            //let's forgive randomly sometimes, to prevent getting caught in a defect feedback loop
            if(Math.random() >= 0.2)
                return h.length ? h[0] : 0;
            else
                return 0;
        }
    }];

    Dilemma.StrategyInstance = Actor;
    Dilemma.Strategy = Strategy;
})(Dilemma || (Dilemma = {}));