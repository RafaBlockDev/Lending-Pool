# Lending-Pool

Lending Pool built in solidity and typescript. Is an experimental borrow smart contract that interact with ether.js

![Little arquitecture](https://github.com/RafaBlockDev/Lending-Pool/blob/main/client/img/Image.png)

## Math

Los préstamos están determinados algorítmicamente por la tasa de préstamo. La tasa de préstamo varía constantemente en función de la oferta y la demanda del mercado (coeficiente de utilización).

### Ratio de utilización

El índice de utilización cuantifica una demanda de préstamos en relación con la cantidad depositada por DAI.

![Fórmula](https://github.com/RafaBlockDev/Lending-Pool/blob/main/client/img/ratioUse.png)

### Tasa de préstamo

La tasa de préstamo aumenta proporcionalme con el índice de utilización.

Algunos valores de los préstamos configurados inicialmente (tasa de préstamos anual fija y tasa base).

![interestMultiplier](https://github.com/RafaBlockDev/Lending-Pool/blob/main/client/img/interestMultiplier.png)

![borrowRate](https://github.com/RafaBlockDev/Lending-Pool/blob/main/client/img/borrowRate.png)

### Tasa de depósito

También la tasa de depósito aumenta proporcionalmente el índice de utilización.

![depositRate](https://github.com/RafaBlockDev/Lending-Pool/blob/main/client/img/depositRate.png)

Este indicador hace que las tarifas sean variables según el uso del protocolo. Cuando el protocolo tiene un índice de utilización más bajo, reduce la tasa de deposit/borrow para atraer a más prestarios que depositantes.

Cuando el uso del protocolo es alto, aumenta las tasas de borrow/deposit para atraer depósitos y alejar a los prestadores.

### bDAI

Cada bDAI es convertible en una cantidad creciente de DAI a medida que se acumulan los intereses, el tipo de cambio entre bDAI y DAI se calcula utilizando esta fórmula:

![bDAI](https://github.com/RafaBlockDev/Lending-Pool/blob/main/client/img/bDAI.png)
