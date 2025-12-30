// tests/e2e.spec.js

// Playwright에서 필요한 모듈들을 가져옵니다.
const { test, expect } = require('@playwright/test');

// 테스트 그룹을 정의합니다.
test.describe('Enneagram App E2E Test', () => {
  // 테스트를 시작하기 전에 항상 로컬 서버의 URL로 이동합니다.
  test.beforeEach(async ({ page }) => {
    // 테스트 서버가 8000번 포트에서 실행 중이라고 가정합니다.
    await page.goto('http://localhost:8000');
  });

  // '간이 검사'를 자동으로 수행하는 테스트 케이스를 정의합니다.
  test('should complete the simple test automatically', async ({ page }) => {
    // 1. 시작 화면에서 '간이 검사' 버튼을 클릭합니다.
    await page.locator('#start-simple-test-btn').click();

    // 2. '간이 검사'는 18개의 문항을 가집니다. 18번 반복합니다.
    const simpleTestQuestions = 18;
    for (let i = 0; i < simpleTestQuestions; i++) {
      // 현재 질문 번호가 올바르게 표시될 때까지 기다리고 확인합니다.
      const currentQuestionLocator = page.locator(`.question-number:has-text("Q.${i + 1} / ${simpleTestQuestions}")`);
      await expect(currentQuestionLocator).toBeVisible();

      // "예", "아니오" 버튼 중 하나를 무작위로 선택하여 클릭합니다.
      const yesButton = page.locator('button:has-text("예")');
      const choice = Math.random() < 0.5 ? yesButton : page.locator('button:has-text("아니오")');
      await choice.click();
    }

    // 3. 모든 질문에 답한 후, 로딩 화면이 나타나는지 확인합니다.
    await expect(page.locator('#loading-screen')).toBeVisible();

    // 4. 결과 화면이 나타날 때까지 기다립니다.
    const resultScreen = page.locator('#result-screen');
    await expect(resultScreen).toBeVisible({ timeout: 10000 });

    // 5. 결과 화면에 유형 타이틀이 정상적으로 표시되는지 확인합니다.
    const resultTitle = resultScreen.locator('.result-type-title');
    await expect(resultTitle).toContainText('유형:');

    // 6. '처음으로 돌아가기' 버튼이 보이는지 확인합니다.
    await expect(page.locator('#go-to-start-btn')).toBeVisible();
  });

  test('should complete the full test automatically', async ({ page }) => {
    // 이 테스트는 문항이 많으므로 제한 시간을 2분으로 늘립니다.
    test.setTimeout(120000);

    // 1. 시작 화면에서 '정식 검사' 버튼을 클릭합니다.
    await page.locator('#start-full-test-btn').click();

    // 2. '정식 검사'는 108개의 문항을 가집니다. 108번 반복합니다.
    const fullTestQuestions = 108;
    for (let i = 0; i < fullTestQuestions; i++) {
      // 현재 질문 번호가 올바르게 표시될 때까지 기다리고 확인합니다.
      const currentQuestionLocator = page.locator(`.question-number:has-text("Q.${i + 1} / ${fullTestQuestions}")`);
      await expect(currentQuestionLocator).toBeVisible();

      // "예", "아니오" 버튼 중 하나를 무작위로 선택하여 클릭합니다.
      const yesButton = page.locator('button:has-text("예")');
      const choice = Math.random() < 0.5 ? yesButton : page.locator('button:has-text("아니오")');
      await choice.click();
    }

    // 3. 모든 질문에 답한 후, 로딩 화면이 나타나는지 확인합니다.
    await expect(page.locator('#loading-screen')).toBeVisible();

    // 4. 결과 화면이 나타날 때까지 기다립니다.
    const resultScreen = page.locator('#result-screen');
    await expect(resultScreen).toBeVisible({ timeout: 20000 });

    // 5. 결과 화면에 유형 타이틀이 정상적으로 표시되는지 확인합니다.
    const resultTitle = resultScreen.locator('.result-type-title');
    await expect(resultTitle).toContainText('유형:');

    // 6. '처음으로 돌아가기' 버튼이 보이는지 확인합니다.
    await expect(page.locator('#go-to-start-btn')).toBeVisible();
  });
});