class MMK {
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
    p0() {
        let sumatoria = 0;
        for (let i = 0; i < this.K; i++) {
            sumatoria += ((Math.pow((this.lambda / this.mu), i)) / this.factorial(i));
        }
        return 1 / (sumatoria + (((Math.pow((this.lambda / this.mu), this.K)) / this.factorial(this.K)) * ((this.K * this.mu) / ((this.K * this.mu) - this.lambda))));
    }
    factorial(n) {
        let fac = 1;
        for (let i = 1; i < n + 1; i++) {
            fac = fac * i;
        }
        return fac;
    }
    Lq() {
        return (((Math.pow((this.lambda / this.mu), this.K)) * this.lambda * this.mu) / (this.factorial(this.K - 1) * (Math.pow(((this.K * this.mu) - this.lambda), 2)))) * this.p0();
    }
    L() {
        return this.Lq() + (this.lambda / this.mu);
    }
    Wq() {
        return this.Lq() / this.lambda;
    }
    W() {
        return this.Wq() + (1 / this.mu);
    }
    Pn(n) {
        let res = 0;
        if (n <= this.K) {
            res = ((Math.pow((this.lambda / this.mu), n)) / this.factorial(n)) * this.p0();
        }
        else if (n > this.K) {
            res = ((Math.pow((this.lambda / this.mu), n)) / (this.factorial(this.K) * (Math.pow(this.K, (n - this.K))))) * this.p0();
        }
        return res;
    }
    Pw() {
        return (1 / this.factorial(this.K)) * (Math.pow((this.lambda / this.mu), this.K)) * ((this.K * this.mu) / ((this.K * this.mu) - this.lambda)) * this.p0();
    }
    P_Wq_igual(n) {
        let sumatoria = 0;
        for (let i = 0; i < this.K; i++) {
            sumatoria += this.Pn(n);
        }
        return sumatoria;
    }
    P_Wq_mayor(n, t) {
        return (1 - this.P_Wq_igual(n)) * (Math.pow(Math.E, ((-this.K * this.mu * t) * (1 - (this.lambda / (this.K * this.mu))))));
    }
    P_w_mayor(t) {
        //lo de los corchetes no forma parte del exponente
        return (Math.E**(-this.mu*t))*(1+((((this.lambda/this.mu)**this.K)*this.p0()*(1-(Math.E**(-this.mu*t*(this.K-1-(this.lambda/this.mu))))))/(this.factorial(this.K)*(1-(this.lambda/(this.K*this.mu)))*(this.K-1-(this.lambda/this.mu)))))
        //lo de los corchetes forma parte de exponente
        //return (Math.pow(Math.E, (-this.mu * t * (1 + (((Math.pow((this.lambda / this.mu), this.K)) * this.p0() * (1 - (Math.pow(Math.E, (-this.mu * t * (this.K - 1 - (this.lambda / this.mu))))))) / (this.factorial(this.K) * (1 - (this.lambda / (this.K * this.mu))) * (this.K - 1 - (this.lambda / this.mu))))))));
    }
}
