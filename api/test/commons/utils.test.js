const expect = require('chai').expect;
const utils = require('../../commons/utils');
describe('common/utils.js', () => {
  describe('utils.md5', () => {
    it('create right md5 hash', () => {
      expect(utils.md5('123456')).to.equal('e10adc3949ba59abbe56e057f20f883e')
    })
  })

  describe('Test utils.isValidEmail()', () => {
    it('should be true', () => {
      expect(utils.isValidEmail('a@a.com')).to.be.true;
      expect(utils.isValidEmail('123456@qq.com')).to.be.true;
      expect(utils.isValidEmail('haha@163.com')).to.be.true;
      expect(utils.isValidEmail('haha@vip.163.com')).to.be.true;
      expect(utils.isValidEmail('haha-h_ehe@qq.com')).to.be.true;
    })
    it('should be false', () => {
      expect(utils.isValidEmail('haha@.com')).to.be.false;
      expect(utils.isValidEmail('haha@.haha.com')).to.be.false;
      expect(utils.isValidEmail('+test@qq.com')).to.be.false;
      expect(utils.isValidEmail(' a@qq.com ')).to.be.false;
      expect(utils.isValidEmail('te st@qq.com')).to.be.false;
      expect(utils.isValidEmail('test@qq.co m')).to.be.false;
      expect(utils.isValidEmail('test.com')).to.be.false;
    })
  })

  describe('Test utils.isValidUrl()', () => {
    it('should be true', () => {
      expect(utils.isValidUrl('123.com')).to.be.true;
      expect(utils.isValidUrl('z.cn')).to.be.true;
      expect(utils.isValidUrl('dremy.cn')).to.be.true;
      expect(utils.isValidUrl('www.dremy.cn')).to.be.true;
      expect(utils.isValidUrl('http://haha.com')).to.be.true;
      expect(utils.isValidUrl('https://test123.com')).to.be.true;
    });
    it('should be false', () => {
      expect(utils.isValidUrl('123')).to.be.false;
      expect(utils.isValidUrl('test.123')).to.be.false;
    });
  });

  describe('Tset utils.md5()', () => {
    it('Create right md5 hash', () => {
      expect(utils.md5('123456')).to.equal('e10adc3949ba59abbe56e057f20f883e');
    });
  });

  describe('Test toNormalUrl()', () => {
    it('change to normalUrl', () => {
      expect(utils.toNormalUrl('dremy.cn')).to.equal('http://dremy.cn');
    });
    it('did not change url', () => {
      expect(utils.toNormalUrl('http://dremy.cn')).to.equal('http://dremy.cn');
      expect(utils.toNormalUrl('https://dremy.cn')).to.equal('https://dremy.cn');
    })
  })
})