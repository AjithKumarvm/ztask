class IntersectionHandler {
  constructor (elem) {
    this.elem = elem
    this.io = null
  }

  bind ({ callback }) {
    if (window.IntersectionObserver) {
      this.io = new window.IntersectionObserver(
        entries => {
          if (entries[0].intersectionRatio !== 0) {
            callback && callback()
          }
        },
        {
          /* Using default options. Details below */
        }
      )
      // Start observing an element
      this.io.observe(this.elem)
    } else {
      callback && callback()
    }
  }

  unBind () {
    this.io && this.io.disconnect()
  }
}

export default IntersectionHandler
