# Q3_2025_Builders_Qualifier

**Turbin3 Prerequisites Implementation** - TypeScript & Rust Solana Development

This repository contains implementations of Solana blockchain interactions in both **TypeScript** and **Rust**, demonstrating fundamental Solana operations required for the Turbin3 enrollment process.

## 🚀 Projects Overview

### 📁 `airdrop-ts/` - TypeScript Implementation

A comprehensive TypeScript project using `@solana/web3.js` and `@coral-xyz/anchor` for Solana blockchain interactions.

### 📁 `rs/` - Rust Implementation

A Rust implementation using native Solana SDK libraries for blockchain operations.

---

## 🛠 Features Implemented

Both projects implement the same core functionality in their respective languages:

| Feature                   | TypeScript            | Rust                                              | Description                              |
| ------------------------- | --------------------- | ------------------------------------------------- | ---------------------------------------- |
| **Keypair Generation**    | ✅ `keygen.ts`        | ✅ `keygen test`                                  | Generate new Solana wallet keypairs      |
| **SOL Airdrop**           | ✅ `airdrop.ts`       | ✅ `claim_airdrop test`                           | Request devnet SOL tokens                |
| **SOL Transfer**          | ✅ `transfer.ts`      | ✅ `transfer_sol test`                            | Transfer fixed amounts (0.1 SOL)         |
| **Transfer All**          | ✅ `transfer_all.ts`  | ✅ `transfer_all test`                            | Transfer entire balance minus fees       |
| **Turbin3 Enrollment**    | ✅ `enroll.ts`        | ✅ `enroll test`                                  | Complete prerequisite program enrollment |
| **Key Format Conversion** | ✅ `key-converter.ts` | ✅ `base_58_to_wallet`, `wallet_to_base_58` tests | Convert between Base58 and JSON formats  |

---

## 📦 Dependencies & Setup

### TypeScript Project (`airdrop-ts/`)

**Prerequisites:**

- Node.js (v16+)
- Yarn or npm

**Key Dependencies:**

```json
{
  "@solana/web3.js": "^1.98.2",
  "@coral-xyz/anchor": "^0.31.1",
  "typescript": "^5.8.3",
  "bs58": "^6.0.0"
}
```

**Setup:**

```bash
cd airdrop-ts
yarn install
# or npm install
```

### Rust Project (`rs/`)

**Prerequisites:**

- Rust (latest stable)
- Cargo

**Key Dependencies:**

```toml
[dependencies]
solana-sdk = "1.15.2"
solana-client = "1.15.2"
solana-program = "1.15.2"
bs58 = "0.4.0"
borsh = "0.10.3"
```

**Setup:**

```bash
cd rs
cargo build
```

---

## 🔧 Usage Examples

### TypeScript Commands

```bash
# Generate a new keypair
yarn keygen

# Request SOL airdrop (2 SOL)
yarn airdrop

# Transfer 0.1 SOL to Turbin3 address
yarn transfer

# Transfer entire balance (minus fees)
yarn transfer_all

# Enroll in Turbin3 prerequisite program
yarn enroll

# Convert between key formats
yarn key-converter base58_to_wallet
yarn key-converter wallet_to_base58
```

### Rust Commands

```bash
# Generate a new keypair
cargo test keygen -- --nocapture

# Request SOL airdrop (2 SOL)
cargo test claim_airdrop -- --nocapture

# Transfer 0.1 SOL to Turbin3 address
cargo test transfer_sol -- --nocapture

# Transfer entire balance (minus fees)
cargo test transfer_all -- --nocapture

# Enroll in Turbin3 prerequisite program
cargo test enroll -- --nocapture

# Convert Base58 to wallet format
cargo test base_58_to_wallet -- --nocapture

# Convert wallet to Base58 format
cargo test wallet_to_base_58 -- --nocapture
```

---

## 🔑 Wallet Configuration

Both projects expect wallet files in the root directory:

- **`dev-wallet.json`** - Development wallet for transactions
- **`Turbin3-wallet.json`** - Turbin3-specific wallet for enrollment

**Wallet Format:**

```json
[157,143,28,208,...]  // Array of 64 bytes representing the secret key
```

---

## 🌐 Network Configuration

**Default Network:** Solana Devnet

- **TypeScript:** `https://api.devnet.solana.com`
- **Rust:** Custom RPC endpoint for enhanced reliability

**Target Address:** `HvG8jN4UinWpd3WAnEhH56qMi9dq6w3Rg1uj3sEmQ7q7` (Turbin3 address)

---

## 📋 Key Program Addresses

| Program            | Address                                        | Purpose               |
| ------------------ | ---------------------------------------------- | --------------------- |
| **Turbin3 Prereq** | `TRBZyQHB3m68FGeVsqTK39Wm4xejadjVhP5MAZaKWDM`  | Enrollment program    |
| **MPL Core**       | `CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d` | Metaplex Core program |
| **Collection**     | `5ebsp5RChCGK7ssRZMVMufgVZhd2kFbNaotcZ5UvytN2` | NFT Collection        |

---

## 🔐 Security Features

- ✅ **Proper Fee Calculation** - Both implementations calculate transaction fees accurately
- ✅ **Signature Verification** - Rust implementation includes signature verification
- ✅ **PDA Generation** - Program Derived Addresses for secure account creation
- ✅ **Error Handling** - Comprehensive error handling and logging
- ✅ **Gitignore Protection** - Sensitive files (wallets, keys) properly excluded

---

## 🎯 Turbin3 Enrollment Process

1. **Initialize Account** - Create prerequisite account (commented in `enroll.ts`)
2. **Submit TypeScript** - Submit TypeScript completion proof via `submitTs()`
3. **NFT Minting** - Mint completion NFT as proof of enrollment

---

## 📝 Development Notes

### TypeScript Project Structure:

- **Scripts ready** - All functions accessible via yarn/npm scripts
- **Anchor integration** - Full Anchor framework support for program interactions
- **Interactive conversion** - Prompt-based key format conversion
- **IDL included** - Generated TypeScript types from Solana program IDL

### Rust Project Structure:

- **Test-based** - All functions implemented as Cargo tests
- **Native SDK** - Direct Solana SDK usage without additional frameworks
- **Interactive input** - Stdin-based user input for key conversion
- **Low-level control** - Manual transaction construction and signing

---

## 🚨 Important Notes

⚠️ **This is for development/learning purposes only**  
⚠️ **Never commit wallet files or private keys to version control**  
⚠️ **Use devnet only - never use mainnet for testing**  
⚠️ **Ensure proper key management in production environments**

---

## 🔗 Useful Links

- [Solana Documentation](https://docs.solana.com/)
- [Anchor Framework](https://project-serum.github.io/anchor/)
- [Turbin3 Prerequisites](https://turbin3.com/)
- [Solana Explorer (Devnet)](https://explorer.solana.com/?cluster=devnet)

---

**Status:** ✅ Ready for Turbin3 Submission  
**Network:** Solana Devnet  
**Languages:** TypeScript, Rust  
**Framework:** Anchor (TS), Native SDK (Rust)
