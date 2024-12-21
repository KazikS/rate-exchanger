import { useState } from "react";

function ExchangeComponent() {


    const [fromRate, setFromRate] = useState("CNY");
    const [toRate, setToRate] = useState("GBP");
    const [amount, setAmount] = useState('');
    const [result, setResult] = useState('');
    
    const handleFromRate = (e) => {
        setFromRate(e.target.value)
    }

    const handleToRate = (e) => {
        setToRate(e.target.value)
    }

    const handleAmount = (e) => {
        setAmount(e.target.value);
    } 

    const handleConvert = async () => {
        const response = await fetch('https://api.api-ninjas.com/v1/exchangerate?pair=' + fromRate + '_' + toRate, 
            {
                method: 'GET',
                headers: {
                    'X-Api-Key': '1d2T7dQGeOWUxV60YucarQ==lRcrFsbzJO3WFy18',
                    'Content-type': 'application/json'
                }
            }
        )
        const data = await response.json();
        let rate = data.exchange_rate;
        setResult(amount * rate);
    }

    const currencySymbols = {
        GBP: "£",
        CNY: "¥",
        CHF: "CHF",
        AUD: "A$",
        PLN: "zł",
        TRY: "₺",
        NZD: "NZ$",
        KRW: "₩",
        DKK: "kr",
        HKD: "HK$",
      };

    return ( 
        <div className="wrapper">
            <h1>Конвертер валют</h1>
            <div className="selectors">
                <div className="from">
                    <select name="from" id="from" onChange={handleFromRate} value={fromRate}>
                        <option value="CNY">Китайский юань</option>
                        <option value="CHF">Швейцарский франк</option>
                        <option value="AUD">Австралийский доллар</option>
                        <option value="PLN">Польский злотый</option>
                        <option value="TRY">Турецкая новая лира</option>
                        <option value="NZD">Новозеландский доллар</option>
                        <option value="KRW">Южнокорейский вон</option>
                        <option value="DKK">Датская крона</option>
                        <option value="HKD">Гонконгский доллар</option>
                        <option value="GBP">Британский фунт</option>
                    </select>
                    <input type="number" placeholder={`Введите число в ${currencySymbols[fromRate]}`} onChange={handleAmount}/>
                </div>

                <div className="to">
                    <select name="to" id="to" onChange={handleToRate} value={toRate}>
                        <option value="CNY">Китайский юань</option>
                        <option value="CHF">Швейцарский франк</option>
                        <option value="AUD">Австралийский доллар</option>
                        <option value="PLN">Польский злотый</option>
                        <option value="TRY">Турецкая новая лира</option>
                        <option value="NZD">Новозеландский доллар</option>
                        <option value="KRW">Южнокорейский вон</option>
                        <option value="DKK">Датская крона</option>
                        <option value="HKD">Гонконгский доллар</option>
                        <option value="GBP">Британский фунт</option>
                    </select>
                    <input  placeholder={`Тут будет число в ${currencySymbols[toRate]}`} readOnly value={result}/>
                </div>
            </div>
            <button onClick={handleConvert}>Конвертировать</button>
        </div>
    );
}

export default ExchangeComponent;