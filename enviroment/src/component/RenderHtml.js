const RenderHTMLPage = (html) => {
    // Define your HTML content as a string
    let htmlContent = html.html;
  
    // Remove the <nav> element and its content
    htmlContent = htmlContent.replace(/<nav\b[^>]*>[\s\S]*?<\/nav>/g, '');
  
    // Remove the <footer> element and its content
    htmlContent = htmlContent.replace(/<footer\b[^>]*>[\s\S]*?<\/footer>/g, '');
    htmlContent = htmlContent.replace(/<div class="footer-basic"[^>]*>[\s\S]*?<\/div>/g, '');

    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    );
  };
  
  export default RenderHTMLPage;
  