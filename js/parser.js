$('menu').each(function(){
    console.log(this.attributes)

    let reservedKeywords = [
        'class',
        'style'
    ]

    let items = '';
    let right_items = '';

    let attributes = '';
    for (let index = 0; index < this.attributes.length; index++) {
        if (reservedKeywords.indexOf(this.attributes.item(index).localName)) {
    attributes += this.attributes.item(index).localName + '="' + this.attributes.item(index).value + '" ';
}
    }

    $(this).children('item').each(function(){
    items += `<li><a href="${$(this).attr('href') ? $(this).attr('href') : '#'}">${$(this).html()}</a></li>`
})

    $(this).children('right').children('item').each(function(){
    right_items += `<li><a href="${$(this).attr('href') ? $(this).attr('href') : '#'}">${$(this).html()}</a></li>`
})

    console.log(right_items)
    console.log(attributes)
    $(this).replaceWith(`<nav class="navbar navbar-default ${ this.attributes.getNamedItem('class') ? this.attributes.getNamedItem('class').value : ''}">
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
                ${items}
            </ul>

            <ul class="nav navbar-nav navbar-right">
                ${right_items}
            </ul>

        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
    </nav>`);
})