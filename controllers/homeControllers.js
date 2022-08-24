exports.respondWithInformation = (req, res) => {
    res.render("informacion", {title:"Información"});
};
exports.respondWithBlog = (req, res) => {
    res.render("blog", {title: "Blog"});
};