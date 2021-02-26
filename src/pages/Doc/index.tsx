import "./doc.scss";
function Doc({ back }: any) {
  return (
    <div className="scene-container">
      <div className="docCon">
        <p>2/27 update: 修正錯字，新增Sam、RB隱藏結局，</p>
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
