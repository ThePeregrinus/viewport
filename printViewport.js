export function printViewport() {
  const vp = document.querySelector('#viewport')
  vp.innerHTML = `${window.innerWidth} X ${window.innerHeight}`
}
