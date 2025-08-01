// Floating AI Q&A widget (preloaded prompts)
document.addEventListener('DOMContentLoaded', function() {
  const prompts = [
    "Tell me about Oracle Aconex improvements.",
    "How did you accelerate Co.dx adoption?",
    "Explain SGHOST cashless wallet.",
    "Share metrics for Ngage & PCRF automation."
  ];
  let widget = document.createElement('div');
  widget.className = 'ai-widget';
  widget.innerHTML = `
    <button class="ai-fab">🤖</button>
    <div class="ai-panel">
      <h4>Ask Me Anything</h4>
      <ul>
        ${prompts.map(p => `<li class='ai-prompt'>${p}</li>`).join('')}
      </ul>
      <input type="text" placeholder="Type your question..." class="ai-input" />
      <button class="ai-send">Send</button>
    </div>
  `;
  document.body.appendChild(widget);
  const fab = widget.querySelector('.ai-fab');
  const panel = widget.querySelector('.ai-panel');
  fab.onclick = () => panel.classList.toggle('open');
  widget.querySelectorAll('.ai-prompt').forEach(li => {
    li.onclick = () => widget.querySelector('.ai-input').value = li.textContent;
  });
  widget.querySelector('.ai-send').onclick = () => {
    alert('This is a static demo. For real AI chat, integrate a backend!');
  };
});

// Widget styles
const aiWidgetStyles = document.createElement('style');
aiWidgetStyles.textContent = `
.ai-widget { position: fixed; bottom: 2rem; right: 2rem; z-index: 9999; }
.ai-fab { background: var(--accent1,#8A2BE2); color: #fff; border: none; border-radius: 50%; width: 56px; height: 56px; font-size: 2rem; box-shadow: 0 4px 16px rgba(0,0,0,0.2); cursor: pointer; transition: background 0.2s; }
.ai-fab:hover { background: var(--accent2,#00FFFF); color: #222; }
.ai-panel { display: none; position: absolute; bottom: 70px; right: 0; background: rgba(45,45,48,0.95); color: #F3F3F3; border-radius: 1rem; box-shadow: 0 8px 32px 0 rgba(0,0,0,0.25); padding: 1.2rem; width: 320px; max-width: 90vw; }
.ai-panel.open { display: block; animation: fadeIn 0.3s; }
.ai-panel h4 { margin-top: 0; }
.ai-panel ul { list-style: none; padding: 0; margin: 0 0 0.5rem 0; }
.ai-panel li { padding: 0.4rem 0.2rem; cursor: pointer; border-radius: 0.5rem; transition: background 0.2s; }
.ai-panel li:hover { background: var(--accent2,#00FFFF); color: #222; }
.ai-input { width: 70%; padding: 0.4rem; border-radius: 0.5rem; border: none; margin-right: 0.5rem; }
.ai-send { background: var(--accent2,#00FFFF); color: #222; border: none; border-radius: 0.5rem; padding: 0.4rem 1rem; cursor: pointer; font-weight: 600; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(20px);} to { opacity: 1; transform: none; } }
`;
document.head.appendChild(aiWidgetStyles);
