class MM1Finito {
    constructor(lambda, mu, N) {
        this.lambda = lambda;
        this.mu = mu;
        this.N = N;
    }
    capacidad() {
        if (this.lambda < this.mu)
            return "si";
        return "no";
    }
    p0() {
        let sumatoria = 0;
        for (let i = 0; i < this.N + 1; i++) {
            sumatoria += (this.factorial(this.N) / this.factorial(this.N - i)) * (Math.pow((this.lambda / this.mu), i));
        }
        return 1 / sumatoria;
    }
    factorial(n) {
        let fac = 1;
        for (let i = 1; i < n + 1; i++) {
            fac = fac * i;
        }
        return fac;
    }
    Lq() {
        return this.N - (((this.lambda + this.mu) / this.lambda) * (1 - this.p0()));
    }
    L() {
        return this.Lq() + (1 - this.p0());
    }
    Wq() {
        return this.Lq() / ((this.N - this.L()) * this.lambda);
    }
    W() {
        return this.Wq() + (1 / this.mu);
    }
    Pn(n) {
        return (this.factorial(this.N) / this.factorial(this.N - n)) * (Math.pow((this.lambda / this.mu), n)) * this.p0();
    }
    Pw() {
        return 1 - this.p0();
    }
}
