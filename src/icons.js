import React from 'react'

export const Folder = props => (
  <svg {...props} aria-hidden="true" data-prefix="fas" data-icon="folder" className="rfst-icon rfst-icon-folder" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z" /></svg>
)

export const FolderOpen = props => (
  <svg {...props} aria-hidden="true" data-prefix="fas" data-icon="folder-open" className="rfst-icon rfst-icon-folder-open" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M572.694 292.093L500.27 416.248A63.997 63.997 0 0 1 444.989 448H45.025c-18.523 0-30.064-20.093-20.731-36.093l72.424-124.155A64 64 0 0 1 152 256h399.964c18.523 0 30.064 20.093 20.73 36.093zM152 224h328v-48c0-26.51-21.49-48-48-48H272l-64-64H48C21.49 64 0 85.49 0 112v278.046l69.077-118.418C86.214 242.25 117.989 224 152 224z" /></svg>
)

export const File = props  => (
  <svg {...props} aria-hidden="true" data-prefix="fas" data-icon="file" className="rfst-icon rfst-icon-file" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z" /></svg>
)

export const CaretRight = props => (
  <svg {...props} aria-hidden="true" data-prefix="fas" data-icon="caret-right" className="rfst-icon rfst-icon-caret-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z" /></svg>
)

export const CaretDown = props => (
  <svg {...props} aria-hidden="true" data-prefix="fas" data-icon="caret-down" className="rfst-icon rfst-icon-caret-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" /></svg>
)

export const Workfolder = props => (
  <svg {...props} aria-hidden="true" data-prefix="fas" data-icon="folder" className="rfst-icon rfst-icon-folder" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <g id="Livello_1">
      <path d="M64,20 L62.689,33.106 C61.456,31.485 59.94,30.103 58.454,28.719 L58.3,28.583 C57.428,27.858 56.348,27.427 55.161,27.427 C54.192,27.516 53.301,27.532 52.467,28.243 C52.263,27.121 51.699,26.091 50.804,25.373 C49.922,24.661 48.843,24.286 47.718,24.286 L42.557,24.286 C40.277,24.286 38.4,25.748 37.842,27.959 L37.78,28.239 C36.988,27.719 36.063,27.428 35.117,27.427 C33.207,27.417 32.191,28.185 30.108,30.242 C28.838,31.496 27.953,32.463 27.388,33.245 C26.777,34.129 26.421,35.04 26.421,36.122 C26.505,37.036 26.597,37.984 27.223,38.736 L27.193,38.741 C25.95,38.967 24.927,39.665 24.226,40.632 C23.624,41.464 23.281,42.455 23.281,43.513 L23.281,48.677 C23.271,49.74 23.626,50.789 24.29,51.656 C25.04,52.635 26.12,53.279 27.342,53.468 L27.366,53.472 C26.867,54.285 26.522,55.196 26.538,56.164 C26.539,57.18 26.842,58.167 27.438,59.009 C28.197,59.96 27.903,59.653 28.24,60 L4,60 L0,20 L64,20 z" fill="currentColor"/>
      <path d="M30,8 L32,12 L58,12 L60,16 L4,16 L8,8 L30,8 z" fill="currentColor"/>
      <path d="M27.281,48.674 L27.281,43.513 Q27.281,43.234 27.466,42.979 Q27.651,42.724 27.908,42.677 L32.234,42.026 Q32.559,40.955 33.14,39.888 Q32.211,38.562 30.653,36.679 Q30.421,36.401 30.421,36.122 Q30.421,35.89 30.63,35.588 Q31.234,34.752 32.919,33.088 Q34.604,31.424 35.117,31.427 Q35.419,31.427 35.721,31.658 L38.929,34.145 Q39.953,33.612 41.047,33.263 Q41.419,30.101 41.721,28.937 Q41.885,28.286 42.557,28.286 L47.719,28.286 Q48.044,28.286 48.289,28.484 Q48.534,28.682 48.557,28.984 L49.208,33.263 Q50.349,33.635 51.302,34.122 L54.604,31.635 Q54.812,31.427 55.161,31.427 Q55.463,31.427 55.742,31.658 Q58.742,34.427 59.578,35.612 Q59.742,35.797 59.742,36.122 Q59.742,36.401 59.557,36.656 Q59.208,37.145 58.372,38.203 Q57.536,39.26 57.117,39.841 Q57.721,41.002 58.07,42.12 L62.325,42.771 Q62.628,42.817 62.815,43.062 Q63.003,43.307 63,43.609 L63,48.771 Q63,49.049 62.815,49.305 Q62.63,49.56 62.349,49.607 L58.047,50.258 Q57.604,51.513 57.141,52.375 Q57.956,53.536 59.628,55.583 Q59.859,55.862 59.859,56.164 Q59.859,56.466 59.651,56.698 Q59.023,57.557 57.349,59.208 Q55.674,60.859 55.164,60.859 Q54.885,60.859 54.56,60.651 L51.351,58.141 Q50.328,58.674 49.234,59.023 Q48.862,62.185 48.56,63.349 Q48.396,64 47.724,64 L42.562,64 Q42.237,64 41.992,63.802 Q41.747,63.604 41.724,63.302 L41.073,59.023 Q39.932,58.651 38.979,58.164 L35.7,60.651 Q35.468,60.859 35.119,60.859 Q34.794,60.859 34.539,60.604 Q31.609,57.953 30.703,56.698 Q30.539,56.466 30.539,56.164 Q30.539,55.885 30.724,55.63 Q31.072,55.141 31.908,54.083 Q32.744,53.026 33.164,52.445 Q32.536,51.284 32.211,50.143 L27.955,49.515 Q27.653,49.469 27.466,49.224 Q27.278,48.979 27.281,48.677 z M39.185,46.14 Q39.185,48.604 40.929,50.349 Q42.674,52.094 45.138,52.094 Q47.601,52.094 49.346,50.349 Q51.091,48.604 51.091,46.14 Q51.091,43.677 49.346,41.932 Q47.601,40.187 45.138,40.187 Q42.674,40.187 40.929,41.932 Q39.185,43.677 39.185,46.14 z" fill="currentColor"/>
    </g>
  </svg>
)

export default {
  Folder,
  FolderOpen,
  File,
  CaretRight,
  CaretDown,
  Workfolder,
}
