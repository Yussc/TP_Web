class Calculator {

    constructor() {
        this.input = document.getElementById("input");
        this.result = document.getElementById("result");
       
        this.history = [];
    }

   
    buttonreturn() {

        if (this.input.value.length > 0) {
            this.input.value = this.input.value.slice(0, -1);
    
        } else if (this.history.length > 0) {
            const lastEntry = this.history.pop();
            this.input.value = lastEntry.operation;
        }
    }    

    
    calcul() {
        try {
            var result = eval(this.input.value);
    
            this.result.value = this.input.value + " = " + result;
           
            this.history.push({ operation: this.input.value, result: result });

        } catch {
            this.result.value = 'Error';
        }

        this.clear();
    }


    add(charClicked) {
        this.input.value += charClicked;
    }


    clear() {
        this.input.value = "";
    }

}

let calculator = new Calculator();
