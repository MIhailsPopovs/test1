"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryProductRecommendation_CreateJoi = void 0;
const Joi = require("joi");
const CategoryRef_joi_1 = require("./CategoryRef.joi");
const ChannelRef_joi_1 = require("./ChannelRef.joi");
const RelatedPlaceRefOrValue_joi_1 = require("./RelatedPlaceRefOrValue.joi");
const ProductOrderRef_joi_1 = require("./ProductOrderRef.joi");
const ItemRef_joi_1 = require("./ItemRef.joi");
const RecommendationItem_joi_1 = require("./RecommendationItem.joi");
const RelatedParty_joi_1 = require("./RelatedParty.joi");
const ShoppingCartRef_joi_1 = require("./ShoppingCartRef.joi");
exports.QueryProductRecommendation_CreateJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('QueryProductRecommendation'),
    category: Joi.array().items(Joi.object(CategoryRef_joi_1.CategoryRefJoi)),
    channel: Joi.array().items(Joi.object(ChannelRef_joi_1.ChannelRefJoi)),
    description: Joi.string(),
    instantSyncRecommendation: Joi.boolean(),
    name: Joi.string(),
    place: Joi.object(RelatedPlaceRefOrValue_joi_1.RelatedPlaceRefOrValueJoi),
    productOrder: Joi.array().items(Joi.object(ProductOrderRef_joi_1.ProductOrderRefJoi)),
    productOrderItem: Joi.array().items(Joi.object(ItemRef_joi_1.ItemRefJoi)),
    recommendationItem: Joi.array().items(Joi.object(RecommendationItem_joi_1.RecommendationItemJoi)),
    recommendationType: Joi.string(),
    relatedParty: Joi.object(RelatedParty_joi_1.RelatedPartyJoi),
    shoppingCart: Joi.array().items(Joi.object(ShoppingCartRef_joi_1.ShoppingCartRefJoi)),
    shoppingCartItem: Joi.array().items(Joi.object(ItemRef_joi_1.ItemRefJoi)),
    state: Joi.string().valid('accepted', 'terminatedWithError', 'inProgress', 'done'),
};
//# sourceMappingURL=QueryProductRecommendation_Create.joi.js.map