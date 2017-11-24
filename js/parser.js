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

$('form').each(function(){

    let textInputs = '';

    $(this).children('text').each(function(){
        $(this).replaceWith(`<div class="form-group">
            <label for="text">${$(this).html()}</label>
            <input type="text" class="form-control" id="text" placeholder="${$(this).attr('placeholder') ? $(this).attr('placeholder') : ''}">
        </div>`)
        console.log('replaced')
    })

    $(this).children('password').each(function(){
        $(this).replaceWith(`<div class="form-group">
            <label for="password">${$(this).html() ? $(this).html() : 'Password'}</label>
            <input type="password" class="form-control" id="password">
        </div>`)
        console.log('password')
    })

    $(this).children('submit').each(function(){
        $(this).replaceWith(`<div class="form-group">
            <button type="submit" class="btn ${$(this).attr('class') ? $(this).attr('class') : 'btn-primary'}">
                ${$(this).html() ? $(this).html() : 'Submit'}
            </button>
        </div>`)
        console.log('password')
    })








    // $(this).replaceWith(
    //     `<form>
    //         <div class="form-group">
    //             <label for="exampleInputEmail1">Email address</label>
    //             <input type="email" class="form-control" id="exampleInputEmail1" placeholder="">
    //         </div>
    //         <div class="form-group">
    //             <label for="exampleInputPassword1">Password</label>
    //             <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
    //         </div>
    //         <div class="form-group">
    //             <label for="exampleInputFile">File input</label>
    //             <input type="file" id="exampleInputFile">
    //             <p class="help-block">Example block-level help text here.</p>
    //         </div>
    //         <div class="checkbox">
    //             <label>
    //             <input type="checkbox"> Check me out
    //             </label>
    //         </div>
    //         <button type="submit" class="btn btn-default">Submit</button>
    //         </form>`
    // );
})