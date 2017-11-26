class Bootstrap
{
    menu(){
        this.element = $('menu')

        this.element.replaceWith(`<nav class="navbar navbar-default ${this.getClass()}">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">Brand</a>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        ${this.renderItems()}
                    </ul>

                    <ul class="nav navbar-nav navbar-right">
                        ${this.renderRightItems()}
                    </ul>

                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
            </nav>`);
    }

    renderItems()
    {
        let items = ''
        console.log
        this.element.children('item').each(function () {
            items += `<li><a href="${$(this).attr('href') ? $(this).attr('href') : '#'}">${$(this).html()}</a></li>`
        })

        return items
    }

    renderRightItems()
    {
        let right_items = ''
        this.element.children('right').children('item').each(function () {
            right_items += `<li><a href="${$(this).attr('href') ? $(this).attr('href') : '#'}">${$(this).html()}</a></li>`
        })

        return right_items;
    }

    getClass()
    {
        console.log(this.element.attr('class'))
        return this.element.attr('class') ? this.element.attr('class') : ''
    }
}

class Bulma
{
    menu()
    {
        this.element = $('menu')
        this.element.replaceWith(`<nav class="navbar is-transparent ${this.getClass()}">
            <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
                </a>
                <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
                <span></span>
                <span></span>
                <span></span>
                </div>
            </div>

            <div id="navbarExampleTransparentExample" class="navbar-menu">
                <div class="navbar-start">
                ${this.renderItems()}
                </div>

                <div class="navbar-end">
                <div class="navbar-item">
                    <div class="field is-grouped">
                        ${this.renderRightItems()}
                    </div>
                </div>
                </div>
            </div>
            </nav>`)
    }

    renderItems() {
        let items = ''
        console.log
        this.element.children('item').each(function () {
            items += `<a class="navbar-item" href="${$(this).attr('href') ? $(this).attr('href') : '#'}">${$(this).html()}</a>`
        })

        return items
    }

    renderRightItems() {
        let right_items = ''
        this.element.children('right').children('item').each(function () {
            right_items += `<a class="navbar-item" href="${$(this).attr('href') ? $(this).attr('href') : '#'}">${$(this).html()}</a>`
        })

        return right_items;
    }

    getClass()
    {
        console.log(this.element.attr('class'))
        return this.element.attr('class') ? this.element.attr('class') : ''
    }
}
class Render
{
    constructor()
    {
        this.framework = $('render').attr('type')
        this.frameworkLoaded = false;

        this.loadFramework()
    }

    loadFramework()
    {
        if (this.framework == 'bootstrap3') {
            $('head').append(`<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
        crossorigin="anonymous">`)
        }

        if (this.framework == 'bulma') {
            $('head').append(`<link href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.1/css/bulma.css" rel="stylesheet"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">`)
        }
    }

    menu()
    {
        if (this.framework == 'bootstrap3') {
            return (new Bootstrap).menu()
        }

        if (this.framework == 'bulma') {
            return (new Bulma).menu()
        }
    }

    form(){}
}
let render = new Render
render.menu()