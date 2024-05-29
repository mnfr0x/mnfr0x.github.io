// Define the contract ABI
const abi = [{"inputs":[{"internalType":"string","name":"firstURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ERC721EnumerableForbiddenBatchMint","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"owner","type":"address"}],"name":"ERC721IncorrectOwner","type":"error"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ERC721InsufficientApproval","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC721InvalidApprover","type":"error"},{"inputs":[{"internalType":"address","name":"operator","type":"address"}],"name":"ERC721InvalidOperator","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"ERC721InvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC721InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC721InvalidSender","type":"error"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ERC721NonexistentToken","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"ERC721OutOfBoundsIndex","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"nom","type":"uint256"}],"name":"benefit","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"adopt","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"num","type":"uint256"}],"name":"harvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"items","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latest","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ratio","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"address","name":"_to","type":"address"}],"name":"release","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newRatio","type":"uint256"}],"name":"setRatio","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"URI","type":"string"}],"name":"setURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"yield","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];

// Define the contract address
const address = "0x771710614f0E44b6E9534B6BBf4105033cD865b6";

const ownedItemsList = document.getElementById('onwed-items');

let account;
let contract;
let web3;

let checked = false;

connectWallet();

// Function to connect the wallet
async function connectWallet() {
    try {
        // Request access to the user's MetaMask accounts
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        console.log('Connected to wallet:', accounts[0]);
        account = accounts[0];

		document.getElementById('connectButton').innerHTML = account;

        connectToContract();
        
    } catch (error) {
        console.error('Error connecting to wallet:', error);
        return null;
    }
}

async function connectToContract() {
    try {

        web3 = new Web3(window.ethereum);
        contract = new web3.eth.Contract(abi, address);

        const yield = await contract.methods.yield().call();
        const total = web3.utils.fromWei(yield, 'ether');
		const formattedTotal = parseFloat(total).toFixed(6);

        document.getElementById('contract-yield').innerHTML = " ≈ " + formattedTotal + " eth";

        const last = await contract.methods.latest().call();
        document.getElementById('latest').innerHTML = "#" + last;

		getOwned();

    } catch (error) {
        console.error('Error connecting to contract:', error);
        return null;
    }
}

async function getOwned() {

	if(checked == false) {
		try {

			checked = true;

			const balance = await contract.methods.balanceOf(account).call(); 
				
			document.getElementById('owned').innerHTML = balance;
	
			for (let x = 0; x <= balance; x++) {

				const tokenID = await contract.methods.tokenOfOwnerByIndex(account, x).call(); 
				const each = await contract.methods.items(tokenID).call(); 
	
				var formatted;
	
				if (each == 0) {
					formatted = '0';
				} else {
					const value = web3.utils.fromWei(each, 'ether');
					formatted = parseFloat(value).toFixed(6);
				}
	
				const listItem = document.createElement('li');
				listItem.textContent = `${tokenID} = ${formatted} `;
	
				ownedItemsList.appendChild(listItem);
			}		
	
		} catch (error) {
			console.error('Error: ', error);
			return null;
		}
	}

}

document.getElementById('connectButton').addEventListener('click', connectWallet);




async function check() {
	var token = document.getElementById("check-token").value;
	var numericValue = parseInt(token);

	await connectWallet();

	const supply = await contract.methods.totalSupply().call();

	if (isNaN(numericValue) || numericValue <= 0 || numericValue > supply) {
		alert("Please enter a valid number between 1 and " + supply);
	} else {

		try {

			const data = await contract.methods.items(token).call();
			const value = web3.utils.fromWei(data, 'ether');
	
			document.getElementById("checked").innerHTML = "NOM : " + token + " = " + value + " eth";
	
	
		} catch (error) {
			console.error('Error connecting to contract:', error);
			return null;
		}

	}
}


async function harvest() {

	await connectWallet();

	var token = document.getElementById("harvest-token").value;
	var numericValue = parseInt(token);

	const supply = await contract.methods.totalSupply().call();

	if (isNaN(numericValue) || numericValue <= 0 || numericValue > supply) {
		alert("Please enter a valid number between 1 and " + supply);
	} else {

		try {

			let address = await contract.methods.ownerOf(token).call();
			let value = await contract.methods.items(token).call();

			console.log (address, account);
			
			if (value == 0 ) {
				alert("There is no ethereum in this item yet.");
				return null;
			}
			if (address = account) {
				const transaction = await contract.methods.harvest(token).send({from: account});
				const txHash = transaction.transactionHash;
				const txLink = document.getElementById("txLink");
				txLink.href = "https://sepolia.etherscan.io/tx/" + txHash; // Etherscan URL for Ethereum transactions
				txLink.textContent = "View Transaction"; // Set the link text	
			} else
			{
				alert("You do not own this item.");
			}

		} catch (error) {
			console.error('Error connecting to contract:', error);
			return null;
		}

	}
}