import { list } from "postcss";
import { useState } from "react";
import {db} from "../firebase"


async function getAccount() {
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  const account = accounts[0];

  return account;
}

async function getData(accountAddress){
  const userRef = db.collection('UserInfo')
      console.log(currentUser.email)
      const querySnap = await userRef.where('wallid', '==', accountAddress).get()
      let temp = []
      querySnap.forEach(doc => {
        console.log(doc.data())
        temp.push(doc.data())
      })
      console.log(temp)
      setUserData(temp)
}

export default function ConnectButton() {
  const [accountAddress, setAccountAddress] = useState("");

  const connectButtonOnClick = () => {
    console.log(window);
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      getAccount().then((response) => {
        setAccountAddress(response);
      });
    } else {
      console.log("error");
    }
  };
  if (accountAddress) {
    getData(accountAddress);
    return (
      <div>
        Address: {accountAddress}
        <br />
        
        
      </div>
    );
  }

  return (
    <div className=" py-6 flex flex-col mx-auto sm:py-12">
    <button onClick={connectButtonOnClick} type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-auto">Connect Wallet</button>
    </div>
  )
}

