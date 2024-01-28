"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryProductRecommendationModel = void 0;
const CategoryRef_model_1 = require("./CategoryRef.model");
const ChannelRef_model_1 = require("./ChannelRef.model");
const RelatedPlaceRefOrValue_model_1 = require("./RelatedPlaceRefOrValue.model");
const ProductOrderRef_model_1 = require("./ProductOrderRef.model");
const ItemRef_model_1 = require("./ItemRef.model");
const RecommendationItem_model_1 = require("./RecommendationItem.model");
const RelatedParty_model_1 = require("./RelatedParty.model");
const ShoppingCartRef_model_1 = require("./ShoppingCartRef.model");
const TimePeriod_model_1 = require("./TimePeriod.model");
exports.QueryProductRecommendationModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    category: { '#type': [CategoryRef_model_1.CategoryRefModel], default: undefined },
    channel: { '#type': [ChannelRef_model_1.ChannelRefModel], default: undefined },
    description: String,
    href: String,
    id: String,
    instantSyncRecommendation: Boolean,
    name: String,
    place: RelatedPlaceRefOrValue_model_1.RelatedPlaceRefOrValueModel,
    productOrder: { '#type': [ProductOrderRef_model_1.ProductOrderRefModel], default: undefined },
    productOrderItem: { '#type': [ItemRef_model_1.ItemRefModel], default: undefined },
    recommendationItem: {
        '#type': [RecommendationItem_model_1.RecommendationItemModel],
        default: undefined,
    },
    recommendationType: String,
    relatedParty: RelatedParty_model_1.RelatedPartyModel,
    shoppingCart: { '#type': [ShoppingCartRef_model_1.ShoppingCartRefModel], default: undefined },
    shoppingCartItem: { '#type': [ItemRef_model_1.ItemRefModel], default: undefined },
    state: String,
    validFor: TimePeriod_model_1.TimePeriodModel,
};
//# sourceMappingURL=QueryProductRecommendation.model.js.map