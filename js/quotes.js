const quotes = [
    {
        quote: "언제나 현재에 집중할수 있다면 행복할것이다.",
        author: "- 파울로 코엘료"
    }, {
        quote: "성공을 갈망할 때만 성공할 수 있고, 실패해도 상관없다고 생각할 때만 실패할 수 있다.",
        author: "- 필리포스"
    }, {
        quote: "성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다.",
        author: "- 톰 모나건"
    }, {
        quote: "성공이란 절대 실수를 하지 않는 게 아니라 같은 실수를 두 번 하지 않는 것에 있다.",
        author: "- 조지버나드 쇼"
    }, {
        quote: "자신이 해야 할 일을 결정하는 사람은 세상에서 단 한 사람, 오직 나 자신뿐이다.",
        author: "- 오손 웰스"
    }, {
        quote: "실패는 잊어라 그러나 그것이 준 교훈은 절대 잊으면 안된다.",
        author: "- 하버트 개서"
    }, {
        quote: "신뢰의 이유는 안전하거나 확실해서가 아니라, 위험을 감수할 용의가 있어서이다.",
        author: "- 미상"
    }, {
        quote: "추구할 수 있는 용기가 있다면 우리의 모든 꿈은 이뤄질 수 있다.",
        author: "- 월트 디즈니"
    }, {
        quote: "늘 하던 대로 하면 늘 얻던 것을 얻는다.",
        author: "- 미상"
    }, {
        quote: "기회는 일어나는 것이 아니라 만들어내는 것이다.",
        author: "- 크리스 그로서"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;