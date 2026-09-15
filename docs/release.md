# Release

Current app version: **0.3.1**.

- Freighter-aware wallet connect with catalog-session fallback (no secret keys)
- Horizon health indicator in the footer
- Compare tray: fractional/cap-rate rows, owner explorer links, remove
- Property pages link owners to Stellar Expert and can add listings to compare
- Error boundary around the shell
- `npm test` covers Stellar key checks, Freighter adapter, share math, and filters
- GitHub Actions runs `npm test` and `npm run build`

Do not commit `.env` files or Stellar secret keys.
