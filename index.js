/* ─── SVG ICONS ─── */
const ICONS = {
  email: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`,
  github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.562 21.8 24 17.302 24 12 24 5.373 18.627 0 12 0z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  twitter: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  hackerone: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.5 19.5v-3h1v3h-1zm.5-4.5c-.828 0-1.5-.672-1.5-1.5V9c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5v4.5c0 .828-.672 1.5-1.5 1.5z"/></svg>`,
  tryhackme: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M10.705 0C7.54 0 4.902 2.285 4.349 5.291a4.525 4.525 0 0 0-4.107 4.5 4.525 4.525 0 0 0 4.52 4.52h6.761a.625.625 0 1 0 0-1.25H4.761a3.273 3.273 0 0 1-3.27-3.27 3.273 3.273 0 0 1 3.27-3.27c.054 0 .11.002.165.005a.625.625 0 0 0 .623-.48C6.003 3.276 8.173 1.25 10.705 1.25c2.612 0 4.826 2.122 5.253 5.039a.625.625 0 0 0 .595.544h.675c1.672 0 3.032 1.36 3.032 3.032s-1.36 3.032-3.032 3.032h-2.103a.625.625 0 1 0 0 1.25h2.103c2.361 0 4.282-1.92 4.282-4.282s-1.92-4.282-4.282-4.282h-.178C16.497 2.15 13.854 0 10.705 0z"/></svg>`,
  medium: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>`,
  bugcrowd: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12c0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12zm5.015 14.116c-.085 1.746-1.215 3.104-2.831 3.396l.01.828c0 .314-.255.569-.569.569h-3.244a.569.569 0 01-.569-.569l.01-.828c-1.616-.292-2.746-1.65-2.831-3.396a.569.569 0 01.569-.599h1.782c.273 0 .507.194.558.462.146.767.793 1.338 1.589 1.338s1.443-.571 1.589-1.338a.569.569 0 01.558-.462h1.782c.329 0 .589.279.569.599zM9.5 9.75c0 .414-.336.75-.75.75s-.75-.336-.75-.75.336-.75.75-.75.75.336.75.75zm6.5 0c0 .414-.336.75-.75.75s-.75-.336-.75-.75.336-.75.75-.75.75.336.75.75z"/></svg>`,
  tailwind: `<svg fill="#4FAECF" width="26" height="26" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" stroke="#4FAECF"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"></path></g></svg>`,
  prisma: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48"><path fill="#4db6ac" d="M44.284,36.035L27.687,1.429c-0.855-1.783-3.337-1.93-4.397-0.26L4.886,30.177	c-0.397,0.625-0.385,1.426,0.029,2.04l9.271,13.738c0.575,0.852,1.634,1.237,2.623,0.953l25.942-7.458	C44.208,39.031,44.939,37.402,44.284,36.035z M40.618,37.279L18.8,43.388c-0.505,0.142-0.98-0.305-0.87-0.818l7.735-36.097	c0.139-0.65,1.023-0.755,1.311-0.157l14.265,29.621C41.489,36.481,41.194,37.118,40.618,37.279z"></path></svg>`,
  postgresql: `<svg width="24px" height="24px" viewBox="-4 0 264 264" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><path d="M255.008 158.086c-1.535-4.649-5.556-7.887-10.756-8.664-2.452-.366-5.26-.21-8.583.475-5.792 1.195-10.089 1.65-13.225 1.738 11.837-19.985 21.462-42.775 27.003-64.228 8.96-34.689 4.172-50.492-1.423-57.64C233.217 10.847 211.614.683 185.552.372c-13.903-.17-26.108 2.575-32.475 4.549-5.928-1.046-12.302-1.63-18.99-1.738-12.537-.2-23.614 2.533-33.079 8.15-5.24-1.772-13.65-4.27-23.362-5.864-22.842-3.75-41.252-.828-54.718 8.685C6.622 25.672-.937 45.684.461 73.634c.444 8.874 5.408 35.874 13.224 61.48 4.492 14.718 9.282 26.94 14.237 36.33 7.027 13.315 14.546 21.156 22.987 23.972 4.731 1.576 13.327 2.68 22.368-4.85 1.146 1.388 2.675 2.767 4.704 4.048 2.577 1.625 5.728 2.953 8.875 3.74 11.341 2.835 21.964 2.126 31.027-1.848.056 1.612.099 3.152.135 4.482.06 2.157.12 4.272.199 6.25.537 13.374 1.447 23.773 4.143 31.049.148.4.347 1.01.557 1.657 1.345 4.118 3.594 11.012 9.316 16.411 5.925 5.593 13.092 7.308 19.656 7.308 3.292 0 6.433-.432 9.188-1.022 9.82-2.105 20.973-5.311 29.041-16.799 7.628-10.86 11.336-27.217 12.007-52.99.087-.729.167-1.425.244-2.088l.16-1.362 1.797.158.463.031c10.002.456 22.232-1.665 29.743-5.154 5.935-2.754 24.954-12.795 20.476-26.351"/><path d="M237.906 160.722c-29.74 6.135-31.785-3.934-31.785-3.934 31.4-46.593 44.527-105.736 33.2-120.211-30.904-39.485-84.399-20.811-85.292-20.327l-.287.052c-5.876-1.22-12.451-1.946-19.842-2.067-13.456-.22-23.664 3.528-31.41 9.402 0 0-95.43-39.314-90.991 49.444.944 18.882 27.064 142.873 58.218 105.422 11.387-13.695 22.39-25.274 22.39-25.274 5.464 3.63 12.006 5.482 18.864 4.817l.533-.452c-.166 1.7-.09 3.363.213 5.332-8.026 8.967-5.667 10.541-21.711 13.844-16.235 3.346-6.698 9.302-.471 10.86 7.549 1.887 25.013 4.561 36.813-11.958l-.47 1.885c3.144 2.519 5.352 16.383 4.982 28.952-.37 12.568-.617 21.197 1.86 27.937 2.479 6.74 4.948 21.905 26.04 17.386 17.623-3.777 26.756-13.564 28.027-29.89.901-11.606 2.942-9.89 3.07-20.267l1.637-4.912c1.887-15.733.3-20.809 11.157-18.448l2.64.232c7.99.363 18.45-1.286 24.589-4.139 13.218-6.134 21.058-16.377 8.024-13.686h.002" fill="#336791"/><path d="M108.076 81.525c-2.68-.373-5.107-.028-6.335.902-.69.523-.904 1.129-.962 1.546-.154 1.105.62 2.327 1.096 2.957 1.346 1.784 3.312 3.01 5.258 3.28.282.04.563.058.842.058 3.245 0 6.196-2.527 6.456-4.392.325-2.336-3.066-3.893-6.355-4.35M196.86 81.599c-.256-1.831-3.514-2.353-6.606-1.923-3.088.43-6.082 1.824-5.832 3.659.2 1.427 2.777 3.863 5.827 3.863.258 0 .518-.017.78-.054 2.036-.282 3.53-1.575 4.24-2.32 1.08-1.136 1.706-2.402 1.591-3.225" fill="#FFF"/><path d="M247.802 160.025c-1.134-3.429-4.784-4.532-10.848-3.28-18.005 3.716-24.453 1.142-26.57-.417 13.995-21.32 25.508-47.092 31.719-71.137 2.942-11.39 4.567-21.968 4.7-30.59.147-9.463-1.465-16.417-4.789-20.665-13.402-17.125-33.072-26.311-56.882-26.563-16.369-.184-30.199 4.005-32.88 5.183-5.646-1.404-11.801-2.266-18.502-2.376-12.288-.199-22.91 2.743-31.704 8.74-3.82-1.422-13.692-4.811-25.765-6.756-20.872-3.36-37.458-.814-49.294 7.571-14.123 10.006-20.643 27.892-19.38 53.16.425 8.501 5.269 34.653 12.913 59.698 10.062 32.964 21 51.625 32.508 55.464 1.347.449 2.9.763 4.613.763 4.198 0 9.345-1.892 14.7-8.33a529.832 529.832 0 0 1 20.261-22.926c4.524 2.428 9.494 3.784 14.577 3.92.01.133.023.266.035.398a117.66 117.66 0 0 0-2.57 3.175c-3.522 4.471-4.255 5.402-15.592 7.736-3.225.666-11.79 2.431-11.916 8.435-.136 6.56 10.125 9.315 11.294 9.607 4.074 1.02 7.999 1.523 11.742 1.523 9.103 0 17.114-2.992 23.516-8.781-.197 23.386.778 46.43 3.586 53.451 2.3 5.748 7.918 19.795 25.664 19.794 2.604 0 5.47-.303 8.623-.979 18.521-3.97 26.564-12.156 29.675-30.203 1.665-9.645 4.522-32.676 5.866-45.03 2.836.885 6.487 1.29 10.434 1.289 8.232 0 17.731-1.749 23.688-4.514 6.692-3.108 18.768-10.734 16.578-17.36zm-44.106-83.48c-.061 3.647-.563 6.958-1.095 10.414-.573 3.717-1.165 7.56-1.314 12.225-.147 4.54.42 9.26.968 13.825 1.108 9.22 2.245 18.712-2.156 28.078a36.508 36.508 0 0 1-1.95-4.009c-.547-1.326-1.735-3.456-3.38-6.404-6.399-11.476-21.384-38.35-13.713-49.316 2.285-3.264 8.084-6.62 22.64-4.813zm-17.644-61.787c21.334.471 38.21 8.452 50.158 23.72 9.164 11.711-.927 64.998-30.14 110.969a171.33 171.33 0 0 0-.886-1.117l-.37-.462c7.549-12.467 6.073-24.802 4.759-35.738-.54-4.488-1.05-8.727-.92-12.709.134-4.22.692-7.84 1.232-11.34.663-4.313 1.338-8.776 1.152-14.037.139-.552.195-1.204.122-1.978-.475-5.045-6.235-20.144-17.975-33.81-6.422-7.475-15.787-15.84-28.574-21.482 5.5-1.14 13.021-2.203 21.442-2.016zM66.674 175.778c-5.9 7.094-9.974 5.734-11.314 5.288-8.73-2.912-18.86-21.364-27.791-50.624-7.728-25.318-12.244-50.777-12.602-57.916-1.128-22.578 4.345-38.313 16.268-46.769 19.404-13.76 51.306-5.524 64.125-1.347-.184.182-.376.352-.558.537-21.036 21.244-20.537 57.54-20.485 59.759-.002.856.07 2.068.168 3.735.362 6.105 1.036 17.467-.764 30.334-1.672 11.957 2.014 23.66 10.111 32.109a36.275 36.275 0 0 0 2.617 2.468c-3.604 3.86-11.437 12.396-19.775 22.426zm22.479-29.993c-6.526-6.81-9.49-16.282-8.133-25.99 1.9-13.592 1.199-25.43.822-31.79-.053-.89-.1-1.67-.127-2.285 3.073-2.725 17.314-10.355 27.47-8.028 4.634 1.061 7.458 4.217 8.632 9.645 6.076 28.103.804 39.816-3.432 49.229-.873 1.939-1.698 3.772-2.402 5.668l-.546 1.466c-1.382 3.706-2.668 7.152-3.465 10.424-6.938-.02-13.687-2.984-18.819-8.34zm1.065 37.9c-2.026-.506-3.848-1.385-4.917-2.114.893-.42 2.482-.992 5.238-1.56 13.337-2.745 15.397-4.683 19.895-10.394 1.031-1.31 2.2-2.794 3.819-4.602l.002-.002c2.411-2.7 3.514-2.242 5.514-1.412 1.621.67 3.2 2.702 3.84 4.938.303 1.056.643 3.06-.47 4.62-9.396 13.156-23.088 12.987-32.921 10.526zm69.799 64.952c-16.316 3.496-22.093-4.829-25.9-14.346-2.457-6.144-3.665-33.85-2.808-64.447.011-.407-.047-.8-.159-1.17a15.444 15.444 0 0 0-.456-2.162c-1.274-4.452-4.379-8.176-8.104-9.72-1.48-.613-4.196-1.738-7.46-.903.696-2.868 1.903-6.107 3.212-9.614l.549-1.475c.618-1.663 1.394-3.386 2.214-5.21 4.433-9.848 10.504-23.337 3.915-53.81-2.468-11.414-10.71-16.988-23.204-15.693-7.49.775-14.343 3.797-17.761 5.53-.735.372-1.407.732-2.035 1.082.954-11.5 4.558-32.992 18.04-46.59 8.489-8.56 19.794-12.788 33.568-12.56 27.14.444 44.544 14.372 54.366 25.979 8.464 10.001 13.047 20.076 14.876 25.51-13.755-1.399-23.11 1.316-27.852 8.096-10.317 14.748 5.644 43.372 13.315 57.129 1.407 2.521 2.621 4.7 3.003 5.626 2.498 6.054 5.732 10.096 8.093 13.046.724.904 1.426 1.781 1.96 2.547-4.166 1.201-11.649 3.976-10.967 17.847-.55 6.96-4.461 39.546-6.448 51.059-2.623 15.21-8.22 20.875-23.957 24.25zm68.104-77.936c-4.26 1.977-11.389 3.46-18.161 3.779-7.48.35-11.288-.838-12.184-1.569-.42-8.644 2.797-9.547 6.202-10.503.535-.15 1.057-.297 1.561-.473.313.255.656.508 1.032.756 6.012 3.968 16.735 4.396 31.874 1.271l.166-.033c-2.042 1.909-5.536 4.471-10.49 6.772z" fill="#FFF"/></svg>`,
  nextJs: `<svg width="24px" height="24px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid"><g><path d="M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z" fill="#ffffff"></path> </g></svg>`,
};

/* ═══════════════════════════════════════
   DATA ARRAYS
═══════════════════════════════════════ */

// ================================ Dev Data ================================
const DV_META = [
  { label: "Location", val: "Remote · Worldwide" },
  { label: "Focus", val: "Next.js · Full-Stack · SaaS" },
  { label: "Status", val: "● Open to Work", cls: "green" },
  { label: "Experience", val: "3+ Years" },
];

const DV_STACK = [
  { ico: ICONS.nextJs, icoStyle: "", name: "Next.js", sub: "App Router" },
  {
    ico: "TS",
    icoStyle: "color:#3178c6;font-weight:700;font-size:1.1rem;",
    name: "TypeScript",
    sub: "Strict mode",
  },
  {
    ico: "⚛",
    icoStyle: "color:#61dafb;",
    name: "React 19",
    sub: "RSC · Hooks",
  },
  { ico: ICONS.tailwind, icoStyle: "color:#38bdf8;", name: "Tailwind", sub: "v4" },
  { ico: ICONS.prisma, icoStyle: "color:#7c6af7;", name: "Prisma", sub: "ORM" },
  { ico: ICONS.postgresql, icoStyle: "color:#336791;", name: "PostgreSQL", sub: "Supabase" },
  { ico: "▲", icoStyle: "", name: "Vercel", sub: "Edge · ISR" },
  { ico: "◻", icoStyle: "color:#e2336b;", name: "tRPC", sub: "Type-safe API" },
];

const DV_PROJECTS = [
  {
    icon: "▲",
    title: "SaaS Dashboard Starter",
    desc: "Full-stack Next.js 14 app with App Router, role-based auth, Prisma + PostgreSQL, and a complete Tailwind UI system.",
    tags: ["Next.js 14", "TypeScript", "Prisma", "tRPC"],
    links: [
      { label: "GitHub", href: "#" },
      { label: "Live ↗", href: "#" },
    ],
  },
];

const DV_TIMELINE = [
  {
    dot: "now",
    date: "2024 — PRESENT · DEMO",
    role: "Senior Frontend Engineer",
    co: "Acme Corp · Remote",
    bullets: [
      "Migrated monolith to Next.js 14 App Router, cutting TTFB by 42%",
      "Introduced RSC patterns that reduced client bundle by 38 kB",
      "Built real-time collaboration features with WebSockets + Zustand",
    ],
  },
];

const DV_CONNECT = [
  {
    icon: "email",
    href: "mailto:neekber@gmail.com",
    title: "Email",
    sub: "neekber@gmail.com",
    cta: "Send a message →",
  },
  {
    icon: "github",
    href: "https://github.com/neekber",
    title: "GitHub",
    sub: "@neekber",
    cta: "View code →",
  },
  {
    icon: "linkedin",
    href: "https://linkedin.com/in/neekber",
    title: "LinkedIn",
    sub: "Professional Network",
    cta: "Connect →",
  },
  {
    icon: "twitter",
    href: "https://twitter.com/neek_ber",
    title: "Twitter / X",
    sub: "@neek_ber",
    cta: "Follow →",
  },
];

// ================================ cyber security Data ================================
const CY_SKILLS = [
  {
    title: "Penetration Testing",
    desc: "Advanced exploitation & vulnerability assessment across web, network, and AD",
  },
  {
    title: "Threat Intelligence",
    desc: "Real-time monitoring & threat hunting ops with OSINT pipelines",
  },
  {
    title: "Security Architecture",
    desc: "Designing robust zero-trust frameworks and hardened infrastructure",
  },
  {
    title: "Incident Response",
    desc: "Rapid detection, forensics, analysis & containment strategies",
  },
];

const CY_STATS = [
  { n: "50+", l: "CVEs FOUND" },
  { n: "3+", l: "YRS EXP" },
  { n: "Top 5%", l: "TRYHACKME" },
  { n: "12+", l: "CTF WINS" },
];

const CY_PROJECTS = [
  {
    ico: "🔐",
    badge: "DEMO",
    title: "AutoRecon Framework",
    desc: "Automated network reconnaissance tool chaining Nmap, Gobuster, and custom scripts to produce structured vulnerability reports.",
    tags: [
      { label: "Python", b: false },
      { label: "Nmap", b: false },
      { label: "Bash", b: true },
      { label: "OSINT", b: true },
    ],
    links: [
      { label: "GH", href: "#" },
      { label: "↗", href: "#" },
    ],
  },
  {
    ico: "🕷️",
    badge: "DEMO",
    title: "Web Vuln Scanner",
    desc: "Custom scanner detecting OWASP Top 10 — SQLi, XSS, SSRF, path traversal — with automated proof-of-concept generation.",
    tags: [
      { label: "Python", b: false },
      { label: "Burp API", b: true },
      { label: "OWASP", b: false },
    ],
    links: [{ label: "GH", href: "#" }],
  },
  {
    ico: "📡",
    badge: "DEMO",
    title: "CTF Writeup Archive",
    desc: "Documented solutions for 40+ CTF challenges across HackTheBox and TryHackMe covering binary exploitation, crypto, and web.",
    tags: [
      { label: "PWN", b: false },
      { label: "Crypto", b: true },
      { label: "Web", b: false },
      { label: "DFIR", b: true },
    ],
    links: [
      { label: "GH", href: "#" },
      { label: "↗", href: "#" },
    ],
  },
];

const CY_TIMELINE = [
  {
    dot: "",
    date: "2024 — PRESENT",
    role: "Bug Bounty Researcher",
    co: "HackerOne · Bugcrowd · Remote",
    bullets: [
      "Identified critical authentication bypass on a top-10 program",
      "Reported 20+ valid vulnerabilities across web & API targets",
      "Maintained P1 response rate of 60%",
    ],
  },
  {
    dot: "mid",
    date: "2022 — 2024",
    role: "Junior Penetration Tester",
    co: "Demo Security Firm · Hybrid",
    bullets: [
      "Conducted web app and network pentests for SMB clients",
      "Authored detailed reports for non-technical stakeholders",
      "Built internal tooling for automated recon pipelines",
    ],
  },
  {
    dot: "old",
    date: "2020 — 2022",
    role: "CTF Competitor & Self-Study",
    co: "Independent",
    bullets: [
      "Top 5% global ranking on TryHackMe",
      "Completed OSCP prep labs & Active Directory attack chains",
      "Published 15+ technical writeups on Medium",
    ],
  },
];

const CY_CONNECT = [
  {
    icon: "github",
    href: "https://github.com/neekber",
    title: "GitHub",
    sub: "@neekber",
  },
  {
    icon: "twitter",
    href: "https://twitter.com/neek_ber",
    title: "Twitter / X",
    sub: "@neek_ber",
  },
  {
    icon: "hackerone",
    href: "https://hackerone.com/neekber",
    title: "HackerOne",
    sub: "Bug Bounty",
  },
  {
    icon: "tryhackme",
    href: "https://tryhackme.com/p/neekber",
    title: "TryHackMe",
    sub: "Top 5%",
  },
  {
    icon: "medium",
    href: "https://medium.com/@neekber",
    title: "Medium",
    sub: "Technical Writing",
  },
  {
    icon: "linkedin",
    href: "https://linkedin.com/in/neekber",
    title: "LinkedIn",
    sub: "Professional",
  },
  {
    icon: "bugcrowd",
    href: "https://bugcrowd.com/neekber",
    title: "Bugcrowd",
    sub: "Bug Bounty",
  },
  {
    icon: "email",
    href: "mailto:neekber@gmail.com",
    title: "Email",
    sub: "neekber@gmail.com",
  },
];

/* ═══════════════════════════════════════
   RENDER FUNCTIONS
═══════════════════════════════════════ */

function render() {
  /* DEV META */
  document.getElementById("dv-meta-list").innerHTML = DV_META.map(
    (m) =>
      `<div class="dv-meta-item">
      <div class="dv-meta-label">${m.label}</div>
      <div class="dv-meta-val${m.cls ? " " + m.cls : ""}">${m.val}</div>
    </div>`
  ).join("");

  /* DEV STACK */
  document.getElementById("dv-stack-grid").innerHTML = DV_STACK.map(
    (s) =>
      `<div class="dv-stack-cell">
      <span class="dv-stack-ico"${s.icoStyle ? ` style="${s.icoStyle}"` : ""}>${
        s.ico
      }</span>
      <span class="dv-stack-name">${s.name}</span>
      <span class="dv-stack-sub">${s.sub}</span>
    </div>`
  ).join("");

  /* DEV PROJECTS */
  document.getElementById("dv-proj-grid").innerHTML = DV_PROJECTS.map(
    (p) =>
      `<div class="dv-proj-card">
      <span class="dv-demo-pill">DEMO</span>
      <div class="dv-proj-top">
        <div class="dv-proj-icon">${p.icon}</div>
        <div class="dv-proj-links">${p.links
          .map((l) => `<a href="${l.href}">${l.label}</a>`)
          .join("")}</div>
      </div>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="dv-tags">${p.tags
        .map((t) => `<span class="dv-tag">${t}</span>`)
        .join("")}</div>
    </div>`
  ).join("");

  /* DEV TIMELINE */
  document.getElementById("dv-tl").innerHTML = DV_TIMELINE.map(
    (t) =>
      `<div class="dv-tl-item">
      <div class="dv-tl-dot${t.dot ? " " + t.dot : ""}"></div>
      <div class="dv-tl-date">${t.date}</div>
      <div class="dv-tl-role">${t.role}</div>
      <div class="dv-tl-co">${t.co}</div>
      <ul class="dv-tl-ul">${t.bullets
        .map((b) => `<li>${b}</li>`)
        .join("")}</ul>
    </div>`
  ).join("");

  /* DEV CONNECT */
  document.getElementById("dv-conn-grid").innerHTML = DV_CONNECT.map(
    (c) =>
      `<a href="${c.href}"${
        c.href.startsWith("http") ? ' target="_blank"' : ""
      } class="dv-conn-card">
      ${ICONS[c.icon]}
      <h4>${c.title}</h4><span>${c.sub}</span>
      <div class="dv-conn-arr">${c.cta}</div>
    </a>`
  ).join("");

  /* CYBER SKILLS */
  document.getElementById("cy-skill-grid").innerHTML = CY_SKILLS.map(
    (s) =>
      `<div class="cy-skill-card"><h4>${s.title}</h4><p>${s.desc}</p></div>`
  ).join("");

  /* CYBER STATS */
  document.getElementById("cy-stats").innerHTML = CY_STATS.map(
    (s) =>
      `<div class="cy-stat"><div class="cy-stat-n">${s.n}</div><div class="cy-stat-l">${s.l}</div></div>`
  ).join("");

  /* CYBER PROJECTS */
  document.getElementById("cy-proj-grid").innerHTML = CY_PROJECTS.map(
    (p) =>
      `<div class="cy-proj-card">
      <span class="cy-proj-badge">${p.badge}</span>
      <div class="cy-proj-top">
        <div class="cy-proj-ico">${p.ico}</div>
        <div class="cy-proj-l">${p.links
          .map((l) => `<a href="${l.href}">${l.label}</a>`)
          .join("")}</div>
      </div>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="cy-tags">${p.tags
        .map((t) => `<span class="cy-tag${t.b ? " b" : ""}">${t.label}</span>`)
        .join("")}</div>
    </div>`
  ).join("");

  /* CYBER TIMELINE */
  document.getElementById("cy-tl").innerHTML = CY_TIMELINE.map(
    (t) =>
      `<div class="cy-tl-item">
      <div class="cy-tl-dot${t.dot ? " " + t.dot : ""}"></div>
      <div class="cy-tl-date">${t.date}</div>
      <div class="cy-tl-role">${t.role}</div>
      <div class="cy-tl-co">${t.co}</div>
      <p class="cy-tl-p">${t.bullets.map((b) => `→ ${b}`).join("<br>")}</p>
    </div>`
  ).join("");

  /* CYBER CONNECT */
  document.getElementById("cy-soc-grid").innerHTML = CY_CONNECT.map(
    (c) =>
      `<a href="${c.href}"${
        c.href.startsWith("http") ? ' target="_blank"' : ""
      } class="cy-soc-card">
      ${ICONS[c.icon]}
      <h4>${c.title}</h4><span>${c.sub}</span>
    </a>`
  ).join("");
}

render();

/* ═══════════════════════════════════════
   MATRIX RAIN
═══════════════════════════════════════ */
const canvas = document.getElementById("cycanvas");
const ctx = canvas.getContext("2d");
let W, H, cols, drops;
function initCanvas() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
  cols = Math.floor(W / 14);
  drops = Array(cols).fill(1);
}
initCanvas();
window.addEventListener("resize", initCanvas);
const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネ";
function drawMatrix() {
  ctx.fillStyle = "rgba(6,12,26,0.05)";
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = "#00ff41";
  ctx.font = "13px monospace";
  for (let i = 0; i < drops.length; i++) {
    ctx.fillText(
      chars[Math.floor(Math.random() * chars.length)],
      i * 14,
      drops[i] * 14
    );
    if (drops[i] * 14 > H && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  }
}
setInterval(drawMatrix, 40);

/* ═══════════════════════════════════════
   MODE SWITCHER
═══════════════════════════════════════ */
const DEV_NAV = {
  about: "#dev-about",
  stack: "#dev-stack",
  projects: "#dev-projects",
  work: "#dev-work",
  connect: "#dev-connect",
};
const CY_NAV = {
  about: "#cy-about",
  stack: "#cy-projects",
  projects: "#cy-projects",
  work: "#cy-work",
  connect: "#cy-connect",
};

function setMode(mode) {
  const isCy = mode === "cy";
  document.body.classList.toggle("cy-mode", isCy);
  document.getElementById("btn-dev").classList.toggle("active", !isCy);
  document.getElementById("btn-cy").classList.toggle("active", isCy);
  document.getElementById("nav-logo").textContent = isCy
    ? "<NeekBer.sec>"
    : "NeekBer";
  document.getElementById("footer-txt").textContent = isCy
    ? "NeekBer · Cybersecurity Expert · Bug Bounty Hunter"
    : "NeekBer · Full-Stack Next.js Developer · Open to work";
  document.getElementById("n-stack").textContent = isCy ? "Skills" : "Stack";
  document.getElementById("mn-stack").textContent = isCy ? "Skills" : "Stack";
  updateNavLinks(isCy ? CY_NAV : DEV_NAV);
  window.scrollTo({ top: 0, behavior: "smooth" });
  closeMob();
}

function updateNavLinks(map) {
  ["about", "stack", "projects", "work", "connect"].forEach((k) => {
    document.getElementById("n-" + k).href = map[k];
    document.getElementById("mn-" + k).href = map[k];
  });
}
updateNavLinks(DEV_NAV);

/* HAMBURGER */
const ham = document.getElementById("ham");
const mobNav = document.getElementById("mobNav");
function closeMob() {
  mobNav.classList.remove("open");
}
ham.addEventListener("click", () => mobNav.classList.toggle("open"));
mobNav
  .querySelectorAll("a")
  .forEach((a) => a.addEventListener("click", closeMob));
document.addEventListener("click", (e) => {
  if (!ham.contains(e.target) && !mobNav.contains(e.target)) closeMob();
});
