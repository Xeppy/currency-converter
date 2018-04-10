import React from 'react';

const Flag = (props) => {
    let countryCode = 'US';
    switch (props.flag) {
        case 'USD':
        countryCode = 'US';
            break; 
        case 'JPY':
        countryCode = 'JP';
            break; 
        case 'BGN':
        countryCode = 'BE';
            break; 
        case 'CZK':
        countryCode = 'CZ';
            break; 
        case 'DKK':
        countryCode = 'DK';
            break; 
        case 'GBP':
        countryCode = 'GB';
            break; 
        case 'HUF':
        countryCode = 'HU';
            break; 
        case 'PLN':
        countryCode = 'PL';
            break; 
        case 'RON':
        countryCode = 'RO';
            break; 
        case 'SEK':
        countryCode = 'SE';
            break; 
        case 'CHF':
        countryCode = 'CH';
            break; 
        case 'ISK':
        countryCode = 'IS';
            break; 
        case 'NOK':
        countryCode = 'NO';
            break; 
        case 'HRK':
        countryCode = 'HR';
            break; 
        case 'RUB':
        countryCode = 'RU';
            break; 
        case 'TRY':
        countryCode = 'TR';
            break; 
        case 'AUD':
        countryCode = 'AU';
            break; 
        case 'BRL':
        countryCode = 'BR';
            break; 
        case 'CAD':
        countryCode = 'CA';
            break; 
        case 'CNY':
        countryCode = 'CN';
            break; 
        case 'HKD':
        countryCode = 'HK';
            break; 
        case 'IDR':
        countryCode = 'ID';
            break; 
        case 'ILS':
        countryCode = 'IL';
            break; 
        case 'INR':
        countryCode = 'IN';
            break; 
        case 'KRW':
        countryCode = 'KR';
            break; 
        case 'MXN':
        countryCode = 'MX';
            break; 
        case 'MYR':
        countryCode = 'MY';
            break; 
        case 'NZD':
        countryCode = 'NZ';
            break; 
        case 'PHP':
        countryCode = 'PH';
            break; 
        case 'SGD':
        countryCode = 'SG';
            break; 
        case 'THB':
        countryCode = 'TH';
            break; 
        case 'ZAR':
        countryCode = 'ZA';
            break; 
        default: 
        countryCode = 'US';
    }
  return <img src={'http://www.countryflags.io/'+ countryCode +'/flat/64.png'} className="mr-2" alt={props.flag}/>     
  
}

export default Flag;