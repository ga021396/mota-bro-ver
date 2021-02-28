import "./doc.scss";
function Doc({ back }: any) {
  return (
    <div className="scene-container">
      <div className="docCon">
        <p>* 兄弟塔1.4版沒意外會是最後的更新了，目前在做新的兄弟幫遊戲中。</p>
        <p>
          ---------------------------------------------------------------------------------------
        </p>
        <p>
          3/01 v1.4 update: 修正錯字，新增蝴蝶兒隱藏結局，解鎖LOCK1NG隱藏模式。
        </p>
        <p>2/27 v1.3 update: 新增蝴蝶兒。</p>
        <p>2/27 v1.2 update: 新增作康。</p>
        <p>2/27 v1.1 update: 修正錯字，新增Sam、RB隱藏結局。</p>
        <p>
          ---------------------------------------------------------------------------------------
        </p>
        <p>
          選擇角色進入遊戲，上下左右移動，碰撞NPC進入戰鬥，錢可以用來分配血量、攻擊、防禦。
        </p>
        <p>
          四位角色都有屬於自己的結局，結局不限於一種，想通關請謹慎分配點數。
        </p>
        <p>任何遊戲上的意見私 twitch : windchi。</p>

        <div>其他小遊戲</div>
        <a href="https://ga021396.github.io/Sam1268/" target="_blank">
          超志祥
        </a>
        <a href="https://ga021396.github.io/steamer-test/" target="_blank">
          兄弟幫心理測驗
        </a>
      </div>
      <button className="Btn" onClick={back}>
        返回
      </button>
    </div>
  );
}

export default Doc;
