class MGKBloqueado {
    constructor(lambda, mu, K) {
        this.lambda = lambda;
        this.mu = mu;
        this.K = K;
    }
    capacidad() {
        if (this.ro() < 1)
            return "si";
        return "no";
    }
    ro() {
        return this.lambda / (this.K * this.mu);
    }
    Pj(j) {
        let sumatoria = 0;
        for (let i = 0; i < this.K + 1; i++) {
            sumatoria += (Math.pow((this.lambda / this.mu), i)) / this.factorial(i);
        }
        return ((Math.pow((this.lambda / this.mu), j)) / this.factorial(j)) / sumatoria;
    }
    factorial(n) {
        let fac = 1;
        for (let i = 1; i < n + 1; i++) {
            fac = fac * i;
        }
        return fac;
    }
}
