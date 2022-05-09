
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Check that clicking the Draw button displays the div with id = “choices”', async () => {
    await driver.sleep(2000)
    await driver.findElement(By.id('draw')).click();
    await driver.sleep(2000)
    const choices = await driver.findElements(By.id('choices'))
    expect(choices.length).toBe(1)
})

test('Check that clicking an “Add to Duo” button displays the div with id = “player-duo”', async () => {
    await driver.sleep(2000)
    await driver.findElement(By.id('draw')).click();
    const addButtons = await driver.findElements(By.className('bot-btn'));
    await addButtons[0].click()
    await driver.sleep(2000)
    const playerDuo = await driver.findElements(By.id('player-duo'))
    expect(playerDuo.length).toBe(1)
})