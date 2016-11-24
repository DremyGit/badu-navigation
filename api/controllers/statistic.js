const HttpError  = require('some-http-error');
const Website = require('../models').Website;
const Statistic = require('../models').Statistic;
const easycopy = require('easy-copy');
const mongoose = require('mongoose');
const utils = require('../commons/utils');

const statisticController = {};

statisticController.addStatistic = async ctx => {
  switch (ctx.request.query.type) {
    case 'click':
      const websiteId = ctx.request.query.id;
      if (!utils.isValidObjectId(websiteId)) {
        throw new HttpError.BadRequestError()
      }
      await Statistic.addClickCount(websiteId);
      ctx.status = 201;
      ctx.body = null;
      break;

    default:
      throw new HttpError.BadRequestError();
      return;
  }
};

statisticController.getStatistics = async ctx => {

  switch (ctx.request.query.type) {
    case 'click':
      const begin = ctx.request.query.from;
      const end = ctx.request.query.to;
      const statistics = await Statistic.getSiteStatistics(begin, end);
      ctx.status = 200;
      ctx.body = statistics;
      break;

    default:
      throw new HttpError.BadRequestError();
      return;
  }
};

module.exports = statisticController;
