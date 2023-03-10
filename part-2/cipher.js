let pi = [3,1,4,1,5,9,2,6,5,3,5,8,9,7,9,3,2,3,8,4,6,2,6,4,3,3];

let something = '';

let decoder = (jumble) => {
    charArr = jumble.split('');
    let messageLength = charArr.length;
    let decryptedWord = '';
    for (let i = 0; i < charArr.length; i++) {


        let charCode = charArr[i].charCodeAt(0);


        // lowercase 97 - 122
        if (charCode >= 97 && charCode <= 122) {
            charCode -= messageLength;

            let piIndex = messageLength + i;
            if (piIndex > 25) piIndex -= 26;

            charCode -= pi[piIndex];

            if (charCode < 97) {
                charCode += 26;
            }

            let newChar = String.fromCharCode(charCode);

            decryptedWord += newChar;


        // uppercase 65 - 90
        } else if (charCode >= 65 && charCode <= 90) {
            charCode -= messageLength;

            let piIndex = messageLength + i;
            if (piIndex > 25) piIndex -= 26;

            charCode -= pi[piIndex];

            if (charCode < 65) {
                charCode += 26;
            }

            let newChar = String.fromCharCode(charCode);

            decryptedWord += newChar;
        } else if (charCode === 32) {
            decryptedWord += ' ';
        }

    }
    console.log(`decrypted word: ${decryptedWord}`);
}

let encoder = (messageToEncrypt) => {
    charArr = messageToEncrypt.split('');
    let encryptedWord = '';
    let messageLength = charArr.length;
    for (let i = 0; i < messageLength; i++) {
        let charCode = charArr[i].charCodeAt(0);
        
        //lowercase 97 - 122
        if (charCode >= 97 && charCode <= 122) {
            // up charcode by message length
            charCode += messageLength;

            // set pi index to be message length + index of message char
            piIndex = messageLength + i;

            // if pi index is greater than 26 (size of pi array) subtract 26 
            if (piIndex > 25) piIndex -= 26;

            // up charcode by value of pi at piIndex
            charCode += pi[piIndex];

            // if charcode is greater than 122 ('z'), subtract 26
            if (charCode > 122) charCode -= 26;

            // get character from charcode
            let newChar = String.fromCharCode(charCode);

            // concat newchar to encrypted word
            encryptedWord += newChar;

        //uppercase 65 - 90
        } else if (charCode >= 65 && charCode <= 90) {
            // up charcode by message length
            charCode += messageLength;

            // set pi index to be message length + index of message char
            piIndex = messageLength + i;

            // if pi index is greater than 25 (size of pi array) subtract 26 
            if (piIndex > 25) piIndex -= 26;

            // up charcode by value of pi at piIndex
            charCode += pi[piIndex];

            // if charcode is greater than 90 ('Z'), subtract 25
            if (charCode > 90) charCode -= 26;

            // get character from charcode
            let newChar = String.fromCharCode(charCode);

            // concat newchar to encrypted word
            encryptedWord += newChar;

        // keep spaces
        } else if (charCode === 32) encryptedWord += ' ';
    }
    console.log(`encrypted word: ${encryptedWord}`);
    decoder(encryptedWord);
}

encoder('encrypted');