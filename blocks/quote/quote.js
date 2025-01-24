export default function decorate(block) {
    const [quoteWrapper] = block.children;
  
    const blockquote = document.createElement('blockquote');
    blockquote.textContent = quoteWrapper.textContent.trim();
    quoteWrapper.replaceChildren(blockquote);
  
  
  {
    "id": "simpleMarquee",
    "fields": [
      {
        "component": "text",
        "valueType": "string",
        "name": "marqueeText",
        "value": "",
        "label": "Marquee text",
        "description": "The text you want shown in your marquee"
      },
      {
        "component": "select",
        "name": "classes",
        "value": "",
        "label": "Background Color",
        "description": "The marquee background color",
        "valueType": "string",
        "options": [
          {
            "name": "Red",
            "value": "bg-red"
          },
          {
            "name": "Green",
            "value": "bg-green"
          },
          {
            "name": "Blue",
            "value": "bg-blue"
          }
        ]
      }
    ]
  }
}