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

export const CaretClosed = props => (
  <svg {...props} width={'20px'} height={'26px'} className={'branch-status'} viewBox="0 0 176 176"><title>chevron-right</title><path fill="currentColor" d="M66.9625,32.5187l-12.925,12.925,41.9833,42.075-41.9833,42.075,12.925,12.925,55-55Z" /></svg>
)

export const CaretOpen = props => (
  <svg {...props} width={'20px'} height={'26px'} className={'branch-status'} viewBox="0 0 176 176"><title>chevron-top</title><path d="M88,51.1962l-55,55,12.925,12.925L88,77.1379l42.075,41.9833L143,106.1962Z" /></svg>
)

export const Workfolder = props => (
  <svg {...props} aria-hidden="true" data-prefix="fas" data-icon="folder" className="rfst-icon rfst-icon-folder" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 176 176">
      <title>folder</title><path fill="currentColor" d="M70.4,17.6H17.6A17.5765,17.5765,0,0,0,.088,35.2L0,140.8a17.6517,17.6517,0,0,0,17.6,17.6H158.4A17.6517,17.6517,0,0,0,176,140.8v-88a17.6517,17.6517,0,0,0-17.6-17.6H88Z" />      
  </svg>
)

export const Subworkfolder = props => (
  <svg {...props} aria-hidden="true" data-prefix="fas" data-icon="sub-folder" className="rfst-icon rfst-icon-sub-folder" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
    <path fill="currentColor" d="M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882z" />
  </svg>
)

export const Check = props => (
    <svg {...props} viewBox="0 0 176 176" width={'1em'} height={'1em'} className={'node-check-icon'}><title>check</title><path fill="currentColor" d="M58.4874,124.5282,14.8232,80.8639-.0457,95.6281l58.5331,58.5331L176.0457,36.6029,161.2816,21.8388Z" /></svg>
)



export default {
  Folder,
  FolderOpen,
  File,
  CaretClosed,
  CaretOpen,
  Workfolder,
  Subworkfolder,
  Check
}
