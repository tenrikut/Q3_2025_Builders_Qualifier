import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";
import prompt from "prompt-sync";
import wallet from "./dev-wallet.json";
import test from "node:test";

const prompts = prompt(); // Create a prompt instance

function base58_to_wallet() {
  const base58 = prompts("Enter your input: "); // Prompt the user for input
  console.log(`You entered: ${base58}`);
  try {
    // gdtKSTXYULQNx87fdD3YgXkzVeyFeqwtxHm6WdEb5a9YJRnHse7GQr7t5pbepsyvUCk7VvksUGhPt4SZ8JHVSkt
    let wallet = bs58.decode(base58);
    console.log(Array.from(wallet));
  } catch (error) {
    console.error("Error decoding base58:", error);
  }
}

function wallet_to_base58() {
  const base58 = bs58.encode(Buffer.from(wallet));
  console.log("Secret Key:", base58.toString());

  const keypair = Keypair.fromSecretKey(Uint8Array.from(wallet));
  console.log("Public Key:", keypair.publicKey.toBase58());
}

// Get command line arguments
const args = process.argv.slice(2);
const functionName = args[0];

if (functionName === "base58_to_wallet") {
  base58_to_wallet();
} else if (functionName === "wallet_to_base58") {
  wallet_to_base58();
} else {
  console.log(
    "Please specify a function: base58_to_wallet or wallet_to_base58"
  );
}
