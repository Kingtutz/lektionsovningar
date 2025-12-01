// Reusable Page Header Script
// This script creates a consistent navigation header across all pages

class PageHeader {
  constructor () {
    this.currentPath = window.location.pathname
    this.isInSitesFolder = this.currentPath.includes('/sites/')
    this.basePath = this.isInSitesFolder ? '../' : './'

    // Navigation structure
    this.navigationData = {
      main: {
        title: 'Main Navigation',
        links: [
          { text: 'Hem', href: 'index.html' },
          { text: 'Events', href: 'sites/övning-events.html' },
          { text: 'Events 2', href: 'sites/övning-event2.html' },
          { text: 'Objekt', href: 'sites/objekts.html' },
          { text: 'Cards', href: 'sites/card.html' },
          { text: 'Väderapp', href: 'sites/väderapp.html' },
          { text: 'Api', href: 'sites/api.html' },
          { text: 'Api/fetch', href: 'sites/apifetch.html' },
          { text: 'async', href: 'sites/async.html' },
          { text: 'Built in stuffs', href: 'sites/builtinobjects.html' }
        ]
      },
      games: {
        title: 'Minispel:',
        links: [
          { text: 'Högsta nummret', href: 'sites/Högstanummret.html' },
          { text: 'Gissa Färgen!', href: 'sites/Gissafärg.html' },
          { text: 'Gissa Numret!', href: 'sites/Gissanummer.html' },
          { text: 'Pig!', href: 'sites/pig.html' },
          { text: 'Flag game!', href: 'sites/flaggame.html' },
          { text: 'Quiz!', href: 'sites/quiz.html' }
        ]
      }
    }

    this.init()
  }

  // Adjust href based on current page location
  adjustPath (href) {
    if (this.isInSitesFolder) {
      // If we're in sites folder, adjust paths
      if (href === 'index.html') {
        return '../index.html'
      } else if (href.startsWith('sites/')) {
        return href.replace('sites/', '')
      }
    }
    return href
  }

  // Create a single navigation section
  createNavSection (sectionData) {
    const header = document.createElement('header')

    // Add title if it exists and it's not just "Main Navigation"
    if (sectionData.title && sectionData.title !== 'Main Navigation') {
      const title = document.createElement('h3')
      title.textContent = sectionData.title
      header.appendChild(title)
    }

    // Create navigation links
    sectionData.links.forEach(linkData => {
      const link = document.createElement('a')
      link.href = this.adjustPath(linkData.href)
      link.textContent = linkData.text

      // Add active class if this is the current page
      const currentFile = this.currentPath.split('/').pop()
      const linkFile = linkData.href.split('/').pop()
      if (
        currentFile === linkFile ||
        (currentFile === '' && linkFile === 'index.html')
      ) {
        link.classList.add('active')
      }

      header.appendChild(link)
    })

    return header
  }

  // Initialize and inject the header
  init () {
    // Create main navigation header
    const mainHeader = this.createNavSection(this.navigationData.main)
    mainHeader.id = 'main-nav'

    // Create games navigation header
    const gamesHeader = this.createNavSection(this.navigationData.games)
    gamesHeader.id = 'games-nav'

    // Insert headers at the beginning of body
    const body = document.body
    body.insertBefore(gamesHeader, body.firstChild)
    body.insertBefore(mainHeader, body.firstChild)

    // Add some basic styling if no existing styles
    this.addBasicStyles()
  }

  // Add basic styling for the navigation
  addBasicStyles () {
    // Check if styles already exist
    if (document.getElementById('page-header-styles')) return

    const style = document.createElement('style')
    style.id = 'page-header-styles'
    // style.textContent = `
    //   header {
    //     background-color: #f4f4f4;
    //     padding: 10px 0;
    //     margin-bottom: 10px;
    //     border-bottom: 1px solid #ddd;
    //   }

    //   header a {
    //     margin: 0 15px;
    //     text-decoration: none;
    //     color: #333;
    //     padding: 8px 12px;
    //     border-radius: 4px;
    //     transition: background-color 0.3s ease;
    //   }

    //   header a:hover {
    //     background-color: #e0e0e0;
    //   }

    //   header a.active {
    //     background-color: #007bff;
    //     color: white;
    //   }

    //   header h3 {
    //     margin: 0 15px 5px 15px;
    //     color: #666;
    //     font-size: 14px;
    //   }

    //   #main-nav {
    //     background-color: #f8f9fa;
    //   }

    //   #games-nav {
    //     background-color: #e9ecef;
    //   }
    // `
    document.head.appendChild(style)
  }
}

// Auto-initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new PageHeader()
})

// Also provide a global function for manual initialization
window.initPageHeader = () => {
  new PageHeader()
}
