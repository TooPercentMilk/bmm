import os
import pandas as pd
import numpy as np
from collections import defaultdict
from surprise import Dataset
from surprise import Reader
from surprise import accuracy
from surprise import SVD


def load_data():
    file_path = os.path.expanduser("/Users/brad/Desktop/bmm/bmm/Ratings.csv")
    reader = Reader(line_format="user item rating", sep=",")
    data = Dataset.load_from_file(file_path, reader=reader)

    return data


def accuracy_test(rec, testset):
    yhat = rec.test(testset)

    return accuracy.rmse(yhat)


def train_model(rec, trainset):
    rec.fit(trainset)

    return rec


def predict(rec, user, n=5):
    best = defaultdict(list)

    for i in range(147):
        prediction = rec.predict(user, i)
        best[0].append((prediction.iid, prediction.est))

    for x, best_list in best.items():
        best_list.sort(key=lambda x: x[1], reverse=True)

    return best_list[:n]

def main():
    print("Welcome to Recommender Alpha 1.0!")

    data = load_data()

    trainset = data.build_full_trainset()

    rec = SVD(n_factors=147) 
    rec = train_model(rec, trainset)

    print(predict(rec, "Dalton"))

    #print(accuracy_test(rec, testset))
    return 0

main()

